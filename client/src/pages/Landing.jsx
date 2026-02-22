import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

function Landing() {
  const navigate = useNavigate();
  const [systemOn, setSystemOn] = useState(false);
  const [showSubModal, setShowSubModal] = useState(false);
  const [showLifeModal, setShowLifeModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showNoticeModal, setShowNoticeModal] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const sections = document.querySelectorAll('.fade-up');
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  return (
    <div className="landing">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
            <img src="/images/logo_투명.png" alt="WinCircuit" className="logo-img" />
            <span>WinCircuit</span>
          </div>
          <div className="nav-links">
            <a href="#structure">구조</a>
            <a href="#process">프로세스</a>
            <a href="#start">시작하기</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-logo-wrap">
            <img src="/images/logo_투명.png" alt="WinCircuit" className="hero-logo" />
          </div>

          <div className="hero-badge-wrap">
            <span className={`hero-badge ${systemOn ? 'on' : 'off'}`}>
              {systemOn ? 'SYSTEM ACTIVE' : 'EMOTION WARNING'}
            </span>
          </div>

          {/* #1, #3 텍스트 변경 */}
          <h1 className="hero-title">
            {systemOn ? (
              <>
                이젠 트레이딩에 감정을 끄고<br />
                <span className="text-green">시스템에 맡겨 자산을 증식시키세요</span>
              </>
            ) : (
              <>
                코인선물거래,<br />
                <span className="text-accent">아직 감으로 트레이딩하며<br />손해를 보고 계신가요?</span>
              </>
            )}
          </h1>

          {/* #2 텍스트 변경 */}
          <p className="hero-sub">
            시장 예측이 아닌 실시간 구조로 대응해야합니다.<br />
            WinCircuit은 단기 추세, 변동성, 포지션 리스크를 자동으로 계산하는 <strong>실전형 트레이딩 엔진</strong>입니다.
          </p>

          {/* #4 토글 - 네비게이션 제거, 단순 토글 */}
          <div className="switch-area">
            <span className="switch-label">감정 매매</span>
            <div
              className={`toggle-switch ${systemOn ? 'active' : ''}`}
              onClick={() => setSystemOn(!systemOn)}
            >
              <div className="toggle-knob" />
            </div>
            <span className="switch-label">시스템 매매</span>
          </div>

          <p className="hero-quiet">
            당신이 잠든 사이에도<br />
            시스템은 정해진 규칙대로 움직입니다.
          </p>
          <p className="hero-mantra">감정 없이. 계획대로.</p>

          {/* 토글 ON 시 두 가지 거래 탭 버튼 */}
          {systemOn && (
            <div className="trade-tabs">
              <button className="trade-tab-btn sub" onClick={() => setShowSubModal(true)}>
                <span className="trade-tab-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </span>
                <span className="trade-tab-text">
                  <strong>무료로 자동매매봇 사용하기</strong>
                  <small>(구독형)</small>
                </span>
              </button>
              <button className="trade-tab-btn life" onClick={() => setShowLifeModal(true)}>
                <span className="trade-tab-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </span>
                <span className="trade-tab-text">
                  <strong>지표구매후 영구적으로 사용하기</strong>
                  <small>(영구결제형)</small>
                </span>
              </button>
            </div>
          )}
        </div>
        <div className="hero-gradient" />
      </section>

      {/* Section: Data doesn't lie */}
      <section className="section section-dark" id="structure">
        <div className="section-inner fade-up">
          <span className="section-tag">MARKET PROOF</span>
          <h2 className="section-title">
            데이터는<br />거짓말하지 않습니다.
          </h2>
          <p className="section-desc">
            급락장, 횡보장, 변동성 장세에서도<br />
            WinCircuit은 <strong>동일한 로직</strong>으로 작동합니다.
          </p>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon-box green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
                </svg>
              </div>
              <h3>추세 구간 자동 감지</h3>
              <p>시장의 방향이 바뀌는 순간을 포착합니다</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-box blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>변동성 확대 시 노출 축소</h3>
              <p>리스크가 커지면 자동으로 포지션을 줄입니다</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-box emerald">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
              </div>
              <h3>반등 구간 수익 실현</h3>
              <p>목표가 도달 시 정확하게 익절합니다</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-box red">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                </svg>
              </div>
              <h3>포지션 누적 제한</h3>
              <p>과도한 노출을 원천 차단합니다</p>
            </div>
          </div>

          {/* #5 텍스트 변경 */}
          <div className="compound-box fade-up">
            <p className="compound-main">
              한 번의 승부가 아니라,<br />
              <strong>반복 가능한 복리 구조</strong>로 설계되었습니다.
            </p>
            <p className="compound-note">
              * 월구독상품은 단리로 진행됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Market Adaptation */}
      <section className="section section-gradient">
        <div className="section-inner fade-up">
          <span className="section-tag">ADAPTIVE STRATEGY</span>
          {/* #6 텍스트 변경 */}
          <h2 className="section-title">
            어떤 시장이 와도 상관없습니다.<br />
            <span className="text-green">여러분이 잠들어 있는 시간에도<br />WinCircuit은 시장에 즉각 반응합니다.</span>
          </h2>
          <p className="section-desc">
            시장은 계속 변합니다.<br />
            WinCircuit은 환경에 따라 전략을 전환합니다.
          </p>

          {/* #7 같은 크기 같은 색 / #8 글 순서 변경 */}
          <div className="strategy-cards">
            <div className="strategy-card bull">
              <div className="strategy-label-lg">상승, 하락장</div>
              <div className="strategy-arrow">→</div>
              <div className="strategy-label-lg">추세 추종</div>
              <div className="strategy-bar bull-bar" />
            </div>
            <div className="strategy-card bear">
              <div className="strategy-label-lg">횡보장</div>
              <div className="strategy-arrow">→</div>
              <div className="strategy-label-lg">변동성 기반 대응</div>
              <div className="strategy-bar bear-bar" />
            </div>
          </div>

          <p className="strategy-rule">
            모든 진입은 <strong>규칙 안에서만</strong> 이루어집니다.
          </p>

          <div className="chart-example fade-up">
            <div className="chart-header">
              <span className="chart-dot green-dot" />
              <span>WinCircuit 실전 차트 — 대폭락장 익절 사례</span>
            </div>
            <div className="chart-visual">
              <svg viewBox="0 0 800 200" className="chart-svg">
                <defs>
                  <linearGradient id="greenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polyline
                  points="0,80 80,70 160,90 240,60 320,120 400,150 480,170 560,140 640,160 720,180 800,190"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="2"
                  opacity="0.6"
                />
                <polyline
                  points="0,120 80,110 160,100 240,85 320,70 400,65 480,55 560,50 640,40 720,35 800,25"
                  fill="url(#greenGrad)"
                  stroke="#10b981"
                  strokeWidth="3"
                />
                <circle cx="320" cy="70" r="5" fill="#10b981" />
                <circle cx="480" cy="55" r="5" fill="#10b981" />
                <circle cx="720" cy="35" r="5" fill="#10b981" />
                <text x="320" y="60" fill="#10b981" fontSize="11" textAnchor="middle">익절</text>
                <text x="480" y="45" fill="#10b981" fontSize="11" textAnchor="middle">익절</text>
                <text x="720" y="25" fill="#10b981" fontSize="11" textAnchor="middle">익절</text>
              </svg>
              <div className="chart-legend">
                <span className="legend-item"><span className="legend-line red-line" />시장 가격</span>
                <span className="legend-item"><span className="legend-line green-line" />WinCircuit 수익</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Trading Process */}
      <section className="section section-dark" id="process">
        <div className="section-inner fade-up">
          <span className="section-tag">TRADING STRUCTURE</span>
          <h2 className="section-title">
            단순한 봇이 아닙니다.
          </h2>
          <p className="section-desc">WinCircuit의 매매 구조:</p>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>추세 확인</h3>
                <p>시장이 움직이기 시작했을 때만 활성화됩니다.<br />불필요한 진입을 원천 차단합니다.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>다중 필터 적용</h3>
                <p>단일 베팅이 아닌 단계적 포지션 구성으로<br />리스크를 분산합니다.</p>
              </div>
            </div>
            <div className="process-step step-with-stat">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>우수한 손익비</h3>
                <p>6년간 검증된 데이터 기반</p>
              </div>
              <div className="stat-row">
                <div className="stat-item">
                  <span className="stat-value">70%</span>
                  <span className="stat-name">승률</span>
                </div>
                <div className="stat-divider" />
                <div className="stat-item">
                  <span className="stat-value">2.9</span>
                  <span className="stat-name">손익비</span>
                </div>
                <div className="stat-divider" />
                <div className="stat-item">
                  <span className="stat-value">6yr</span>
                  <span className="stat-name">검증 기간</span>
                </div>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3>복리 구조 반복</h3>
                <p>목표 도달 시 포지션 정리 후 복리 구조로 재진입.<br />이 과정이 <strong>자동으로 반복</strong>됩니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Easy Setup */}
      <section className="section section-gradient" id="start">
        <div className="section-inner fade-up">
          <span className="section-tag">EASY START</span>
          <h2 className="section-title">
            설치는 필요 없습니다.<br />
            <span className="text-green">차트만 있으면 됩니다.</span>
          </h2>

          <div className="setup-flow">
            <div className="setup-step">
              <div className="setup-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3>TradingView</h3>
              <p>차트 플랫폼에서<br />전략 세팅</p>
            </div>
            <div className="setup-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
            <div className="setup-step">
              <div className="setup-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
                </svg>
              </div>
              <h3>웹훅 연동</h3>
              <p>거래소와<br />자동 연결</p>
            </div>
            <div className="setup-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
            <div className="setup-step">
              <div className="setup-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3>자동 매매 시작</h3>
              <p>시그널 봇으로<br />바로 실행</p>
            </div>
          </div>

          {/* #9 '시그널 봇' 하얀색, 폰트 키움 */}
          <p className="setup-note">
            복잡한 서버 구축 없이, 거래소 자체 내 <span className="signal-bot-text">시그널 봇</span>으로<br />
            전략 세팅 후 바로 시작 가능합니다.
          </p>
        </div>
      </section>

      {/* Section: Target Users */}
      <section className="section section-dark">
        <div className="section-inner fade-up">
          <span className="section-tag">FOR YOU</span>
          <h2 className="section-title">이런 분들에게 적합합니다</h2>

          <div className="target-grid">
            <div className="target-card">
              <div className="target-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              {/* #11 텍스트 변경 */}
              <p>더 이상 매매에 감정소모 하고싶지 않은 분</p>
            </div>
            <div className="target-card">
              <div className="target-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              {/* #12 텍스트 변경 */}
              <p>반복적이고 체계적인 자동매매를 원하는 분</p>
            </div>
            <div className="target-card">
              <div className="target-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p>단기 트레이딩을 시스템화하고 싶은 분</p>
            </div>
            <div className="target-card">
              <div className="target-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p>직접 매매할 시간이 없는 분</p>
            </div>
          </div>

          {/* #10 가입 링크 버튼 */}
          <div className="signup-links">
            <a href="#" className="signup-link-btn tradingview" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="signup-icon">
                <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
              </svg>
              15달러 쿠폰받고 트레이딩뷰 가입하기
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="signup-arrow-icon">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
            <a href="#" className="signup-link-btn okx" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="signup-icon">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
              OKX 해외선물거래소 가입하기
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="signup-arrow-icon">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA / Pricing Section */}
      <section className="section section-cta">
        <div className="section-inner fade-up">
          <div className="cta-glow" />
          {/* #13 텍스트 변경 */}
          <h2 className="cta-title">
            WinCircuit은<br />
            시장에 오래 남을 수 있는 전략과<br />
            장기 플랜을 제공합니다.
          </h2>
          <p className="cta-sub">시스템이 관리합니다.</p>
          <p className="cta-phrase">
            수익은 구조에서 옵니다.<br />
            <span className="text-muted">Profit comes from structure, not emotion.</span>
          </p>

          <div className="pricing-cards">
            {/* 구독형 카드 */}
            <div className="pricing-card">
              <div className="pricing-badge">SUBSCRIPTION</div>
              {/* #15 */}
              <h3>구독형(무료)</h3>
              <p>월 단위로 시스템을 이용합니다.<br />단리 구조로 운영됩니다.</p>
              {/* #17 모달 열기 */}
              <button className="pricing-btn" onClick={() => setShowSubModal(true)}>
                자세히 보기
              </button>
              {/* #18 아이콘 링크 */}
              <div className="pricing-card-links">
                <a href="#" className="pricing-icon-link" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="pricing-link-svg youtube-svg">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  구독형 이용법 영상으로 보기
                </a>
              </div>
            </div>

            {/* 영구 결제형 카드 */}
            <div className="pricing-card featured">
              <div className="pricing-badge">LIFETIME</div>
              {/* #16 */}
              <h3>영구 결제형(3,300usdt)</h3>
              {/* #14 텍스트 변경 */}
              <p>한 번 결제로 평생 이용.<br />복리 구조가 추가로 적용됩니다.</p>
              {/* #17 모달 열기 */}
              <button className="pricing-btn primary" onClick={() => setShowLifeModal(true)}>
                자세히 보기
              </button>
              {/* #18 아이콘 링크 */}
              <div className="pricing-card-links">
                <a href="#" className="pricing-icon-link" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="pricing-link-svg youtube-svg">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  영구결제형 이용법 영상으로 보기
                </a>
              </div>
            </div>
          </div>

          <div className="cta-actions">
            <a href="#" className="cta-telegram-btn" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" className="cta-telegram-icon">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              텔레그램 문의방 입장하기
            </a>
          </div>
        </div>
      </section>

      {/* #21 유의사항 섹션 */}
      <section className="section section-dark disclaimer-section">
        <div className="section-inner fade-up">
          <h2 className="section-title disclaimer-title">유의사항</h2>
          <div className="disclaimer-box">
            <p className="disclaimer-youtube-link">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" className="disclaimer-yt-icon">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                유튜브
              </a>
            </p>
            <p className="disclaimer-heading">[WinCircuit – 탄탄한 과거 데이터로 검증된 자동매매]</p>
            <ol className="disclaimer-list">
              <li>본 채널은 '변동성 시장에 반응하는 자동매매 지표 개발 및 공급'을 주 목적으로 하며, 제도권 금융투자업 사업자가 아닙니다.</li>
              <li>제공되는 지표와 Signal봇은 과거 데이터를 기반으로 최적의 매매를 제공하지만, 미래의 확정적 수익을 보장하진 않습니다.</li>
              <li>OKX 선물거래소사용은 단순하면서 최적의 매매시스템을 제공하기 위함입니다.</li>
              <li>우리는 금융위원회의 가이드라인 및 해외 거래소의 한국인 대상 영업 금지 정책을 준수합니다.</li>
              <li>사칭에 주의하십시오. 우리는 리딩 및 대리 매매, 원화 입출금 지원이나 직접적인 중개 행위를 하지 않습니다.</li>
            </ol>

            <div className="notice-link-wrap" onClick={() => setShowNoticeModal(true)}>
              <span className="notice-link-icon">📢</span>
              <span className="notice-link-text">해외 가상자산 거래소 이용 시 꼭 확인하세요!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">
            <img src="/images/logo_투명.png" alt="WinCircuit" className="logo-img footer-logo-img" />
            <span>WinCircuit</span>
          </div>
          <p className="footer-disclaimer">
            본 서비스는 투자 자문이 아니며, 모든 투자의 책임은 이용자 본인에게 있습니다.<br />
            과거 수익률이 미래 수익을 보장하지 않습니다.
          </p>
          <p className="footer-copy">WinCircuit. All rights reserved.</p>
        </div>
      </footer>

      {/* ===== MODALS ===== */}

      {/* #19 구독형 자세히보기 모달 */}
      {showSubModal && (
        <div className="modal-overlay" onClick={() => setShowSubModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowSubModal(false)}>&times;</button>
            <h2 className="modal-title">구독형(무료) 상세 안내</h2>
            <div className="modal-body">
              <ol className="modal-list">
                <li>구독형상품은 OKX거래소에서 이미 제공되고 있어, 운용 금액만 선택하시면 바로 <span className="modal-highlight">무료</span>로 사용하실 수 있습니다.</li>
                <li>OKX 거래소에서 제공하는 기능인 signal bot을 이용한 카피트레이딩입니다.</li>
                <li>각 1,000 / 3,000 / 6,000 / 10,000 / 50,000 테더로 단리로 운용됩니다.</li>
                <li>원하시는 자본금의 링크를 클릭하시고 subscribe하시면 OKX 거래소에서 카피트레이딩을 시작하실 수 있습니다.</li>
                <li>자본금을 맡기는 것이 아닌 시작과 종료를 언제든지 정하실 수 있습니다.</li>
                <li>구독(무료)하시고 적용하시면 WinCircuit에게 매매를 맡기실 수 있습니다.</li>
                <li>수익이 발생하게 되면 수익금의 10%가 signal bot 배포자의 서비스운영자금으로 제공되어집니다.</li>
              </ol>
            </div>
            <div className="modal-signal-btns">
              <a href="#" className="modal-signal-btn" target="_blank" rel="noopener noreferrer">
                자본금 1,000 USDT Signal Bot 구독하기
              </a>
              <a href="#" className="modal-signal-btn" target="_blank" rel="noopener noreferrer">
                자본금 3,000 USDT Signal Bot 구독하기
              </a>
              <a href="#" className="modal-signal-btn" target="_blank" rel="noopener noreferrer">
                자본금 6,000 USDT Signal Bot 구독하기
              </a>
              <a href="#" className="modal-signal-btn" target="_blank" rel="noopener noreferrer">
                자본금 10,000 USDT Signal Bot 구독하기
              </a>
              <a href="#" className="modal-signal-btn" target="_blank" rel="noopener noreferrer">
                자본금 50,000 USDT Signal Bot 구독하기
              </a>
            </div>
          </div>
        </div>
      )}

      {/* #20 영구결제형 자세히보기 모달 */}
      {showLifeModal && (
        <div className="modal-overlay" onClick={() => setShowLifeModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowLifeModal(false)}>&times;</button>
            <h2 className="modal-title">영구 결제형(3,300 USDT) 상세 안내</h2>
            <div className="modal-body">
              <ol className="modal-list">
                <li>
                  트레이딩뷰 계정이 필요합니다. 트레이딩뷰 플랜 중 적어도 <strong>'Essential'</strong>이 필요합니다.
                  <p className="modal-tip">
                    Tip. 블랙프라이데이때가 1년 중 가장 저렴하여, 단기로 구매하시다 해당 sale 기간에 장기간으로 구매하시면 유리합니다.
                  </p>
                </li>
                <li>결제(하단의 링크를 통한 지갑주소로 USDT 이체 및 트레이딩뷰 닉네임 입력) 후 영구적으로 사용 가능합니다.</li>
                <li>트레이딩뷰 지표(초대전용)에서 WinCircuit 지표 적용.</li>
                <li>OKX 거래소 내 signal bot 생성 후 해당 웹훅 URL과 메시지 입력하여 alert 생성.</li>
              </ol>
            </div>
            <div className="modal-signal-btns">
              <button
                className="modal-signal-btn primary"
                onClick={() => { setShowLifeModal(false); setShowPaymentModal(true); }}
              >
                결제하기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* #20 결제 QR코드 모달 */}
      {showPaymentModal && (
        <div className="modal-overlay" onClick={() => setShowPaymentModal(false)}>
          <div className="modal-box modal-box-sm" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowPaymentModal(false)}>&times;</button>
            <h2 className="modal-title">결제 안내</h2>
            <div className="modal-body payment-body">
              <div className="qr-placeholder">
                <div className="qr-box">
                  <svg viewBox="0 0 100 100" width="160" height="160">
                    <rect width="100" height="100" fill="#1e293b" rx="8" />
                    <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fill="#64748b" fontSize="10">QR Code</text>
                    <text x="50" y="65" textAnchor="middle" dominantBaseline="middle" fill="#475569" fontSize="7">추후 제공 예정</text>
                  </svg>
                </div>
              </div>
              <p className="wallet-label">USDT 지갑 주소 (TRC-20)</p>
              <div className="wallet-address">
                <code>추후 제공 예정</code>
              </div>
              <p className="payment-note">
                위 지갑 주소로 3,300 USDT를 이체해 주세요.<br />
                이체 후 트레이딩뷰 닉네임을 텔레그램 문의방으로 보내주시면<br />
                확인 후 지표 초대가 진행됩니다.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 해외 거래소 유의사항 모달 */}
      {showNoticeModal && (
        <div className="modal-overlay" onClick={() => setShowNoticeModal(false)}>
          <div className="modal-box modal-box-lg" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowNoticeModal(false)}>&times;</button>
            <h2 className="modal-title">해외 가상자산 거래소 이용 시 꼭 확인하세요!</h2>
            <p className="notice-modal-sub">해외 거래소 이용하기 전, 아래의 주의사항을 꼼꼼히 체크해주세요.</p>
            <div className="modal-body notice-modal-body">
              <div className="notice-item">
                <strong>국내 미인가 거래소 유의.</strong>
                <p>현재 국내에서 이용가능한 해외 코인거래소들은 국내 가상자산사업자 인가를 받지 않은 상태입니다. 이로 인해 서비스 이용이 원활하지 않을 수 있습니다.</p>
              </div>
              <div className="notice-item">
                <strong>이용 및 파산 위험 안내.</strong>
                <p>해외 거래소를 이용하는 경우, 갑작스러운 서비스 중단이나 거래소 파산 등의 예기치 못한 위험에 노출될 수 있음을 인지하고 있어야 합니다.</p>
              </div>
              <div className="notice-item">
                <strong>개인 지갑 사용 권장.</strong>
                <p>소중한 자산은 거래소보다는 개인 지갑으로 이동시켜 안전하게 보관하시는 것을 추천드립니다.</p>
              </div>
              <div className="notice-item">
                <strong>파생상품 거래 주의.</strong>
                <p>해외 거래소에서 제공하는 선물 및 파생상품 등은 비인가 상품으로 분류될 가능성이 있어 이용을 권장하지 않습니다.</p>
              </div>
              <div className="notice-item">
                <strong>불법 사설 거래소 피싱 방지.</strong>
                <p>금융정보분석원에 신고되지 않은 불법 사설 거래소에서 원금이나 수익금 출금을 거부하는 피해 사례가 빈번합니다. 이용 전 반드시 정상적인 거래소인지 확인하세요.</p>
              </div>
              <div className="notice-item">
                <strong>미성년자 이용 엄격 금지.</strong>
                <p>미성년자가 타인의 명의를 도용하여 해외 거래소를 이용하는 행위는 어떠한 경우에도 허용되지 않습니다.</p>
              </div>
              <div className="notice-item">
                <strong>관련 법규 준수.</strong>
                <p>자본시장법, 가상자산이용자보호법 등 관련 법령을 위반하는 행위가 발생하지 않도록 항상 법규를 숙지하고 준수하고 있습니다.</p>
              </div>
              <div className="notice-item">
                <strong>WinCircuit 운영 안내.</strong>
                <p>WinCircuit 서비스는 레퍼럴 코드를 통한 가입을 강요하지 않습니다. 구독형상품(수익공유)과 영구결제(지표사용)는 서비스의 기술적 고도화, 서버 유지보수, 더 양질의 자동매매를 제작하는데 사용됩니다.</p>
              </div>
              <div className="notice-item">
                <strong>투자 책임 안내.</strong>
                <p>WinCircuit 결과물은 과거 데이터를 기반으로한 자동매매 지표입니다. 어떠한 경우에도 수익을 보장하거나 투자를 권유하는 것이 아니며, 모든 투자의 최종 결정과 책임은 투자자 본인에게 있습니다.</p>
              </div>
              <div className="notice-item">
                <strong>면책 조항.</strong>
                <p>가상자산은 변동성이 매우 큰 자산으로, 투자로 인해 발생한 어떠한 경제적 손실에 대해서도 WinCircuit과 운영진은 법적 책임을 지지 않습니다.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Landing;
