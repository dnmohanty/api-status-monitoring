import { useEffect, useState } from 'react';
import './App.css';

interface LogEntry {
  timestamp: string;
  data: any;
}

function App() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [backendError, setBackendError] = useState<boolean>(false);

  const fetchLogs = async () => {
    try {
      const response = await fetch('https://api-status-monitoring.onrender.com/api/history');
      
      if (!response.ok) {
        throw new Error('Backend is down');
      }

      const parsedLogs = await response.json();
      
      setLogs(Array.isArray(parsedLogs) ? parsedLogs.reverse() : []);
      setBackendError(false); 
    } catch (error) {
      setBackendError(true);
    }
  };

  useEffect(() => {
    fetchLogs(); 
    const intervalId = setInterval(fetchLogs, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Autonomous API Dashboard</h1>
        
        <div className={`status-badge ${backendError ? 'status-error' : 'status-healthy'}`}>
          <div className="status-dot"></div>
          {backendError ? 'Backend Disconnected' : 'System Healthy'}
        </div>
      </header>

      <main className="log-grid">
        <div className="grid-header">
          <span>Status</span>
          <span>Timestamp</span>
          <span>Target Identity</span>
        </div>
        
        {logs.map((log, index) => (
          <div key={index} className="grid-row">
            <span className="success-text">200 OK</span>
            <span>{new Date(log.timestamp).toLocaleString()}</span>
            <span className="code-font">{log.data?.username || log.data?.login || 'Unknown'} (ID: {log.data?.id || 'N/A'})</span>
          </div>
        ))}
        
        {logs.length === 0 && !backendError && (
          <div className="empty-state">Waiting for autonomous pings...</div>
        )}
      </main>
    </div>
  );
}

export default App;