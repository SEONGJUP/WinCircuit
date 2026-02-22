import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const [serverStatus, setServerStatus] = useState('checking');

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then(() => setServerStatus('online'))
      .catch(() => setServerStatus('offline'));
  }, []);

  return (
    <div className="dashboard">
      <header className="dash-header">
        <div className="dash-logo" onClick={() => navigate('/')}>
          <span className="dash-logo-icon">W</span>
          <span>WinCircuit</span>
        </div>
        <nav className="dash-nav">
          <button className="dash-nav-btn active">Dashboard</button>
          <button className="dash-nav-btn" onClick={() => navigate('/')}>
            Landing
          </button>
        </nav>
      </header>

      <main className="dash-main">
        <h2 className="dash-title">Dashboard</h2>
        <p className="dash-subtitle">WinCircuit 시스템 상태를 확인하세요.</p>

        <div className="dash-stats">
          <div className="dash-stat-card">
            <span className={`status-dot ${serverStatus}`} />
            <span className="dash-stat-value">
              {serverStatus === 'online' ? 'Active' : serverStatus === 'checking' ? '...' : 'Offline'}
            </span>
            <span className="dash-stat-label">서버 상태</span>
          </div>
          <div className="dash-stat-card">
            <span className="dash-stat-value green">3001</span>
            <span className="dash-stat-label">API 포트</span>
          </div>
          <div className="dash-stat-card">
            <span className="dash-stat-value green">3000</span>
            <span className="dash-stat-label">Client 포트</span>
          </div>
        </div>

        <div className="dash-section">
          <h3>기능 영역</h3>
          <p className="dash-placeholder">
            이 페이지에 실제 트레이딩 대시보드 기능을 추가할 수 있습니다.<br />
            차트, 포지션 현황, 수익률 등의 기능이 들어갈 공간입니다.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
