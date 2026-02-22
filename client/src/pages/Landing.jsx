import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import translations from '../i18n/translations';
import './Landing.css';

function Landing() {
  const navigate = useNavigate();
  const [systemOn, setSystemOn] = useState(false);
  const [showSubModal, setShowSubModal] = useState(false);
  const [showLifeModal, setShowLifeModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showNoticeModal, setShowNoticeModal] = useState(false);
  const [lang, setLang] = useState('ko');
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);

  const t = translations[lang];

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

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const langOptions = [
    { code: 'ko', label: '한국어', flag: 'KR' },
    { code: 'en', label: 'English', flag: 'EN' },
  ];

  const currentLang = langOptions.find((l) => l.code === lang);

  return (
    <div className="landing">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
            <img src="/images/logo_투명.png" alt="WinCircuit" className="logo-img" />
            <span>WinCircuit</span>
          </div>
          <div className="nav-right">
            <div className="nav-links">
              <a href="#structure">{t.nav.structure}</a>
              <a href="#process">{t.nav.process}</a>
              <a href="#start">{t.nav.start}</a>
            </div>
            <div className="lang-selector" ref={langRef}>
              <button className="lang-btn" onClick={() => setLangOpen(!langOpen)}>
                <span className="lang-flag">{currentLang.flag}</span>
                <span className="lang-label">{currentLang.label}</span>
                <svg className={`lang-chevron ${langOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {langOpen && (
                <div className="lang-dropdown">
                  {langOptions.map((opt) => (
                    <button
                      key={opt.code}
                      className={`lang-option ${lang === opt.code ? 'active' : ''}`}
                      onClick={() => { setLang(opt.code); setLangOpen(false); }}
                    >
                      <span className="lang-flag">{opt.flag}</span>
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
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
              {systemOn ? t.hero.badgeOn : t.hero.badgeOff}
            </span>
          </div>

          <h1 className="hero-title">
            {systemOn ? (
              <>
                {t.hero.titleOn}<br />
                <span className="text-green">{t.hero.titleOnHighlight}</span>
              </>
            ) : (
              <>
                {t.hero.titleOff}<br />
                <span className="text-accent">{t.hero.titleOffHighlight.split('\n').map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}</span>
              </>
            )}
          </h1>

          <p className="hero-sub">
            {t.hero.sub}<br />
            {t.hero.subDetail} <strong>{t.hero.subBold}</strong>{t.hero.subSuffix}
          </p>

          <div className="switch-area">
            <span className="switch-label">{t.hero.switchOff}</span>
            <div
              className={`toggle-switch ${systemOn ? 'active' : ''}`}
              onClick={() => setSystemOn(!systemOn)}
            >
              <div className="toggle-knob" />
            </div>
            <span className="switch-label">{t.hero.switchOn}</span>
          </div>

          <p className="hero-quiet">
            {t.hero.quiet1}<br />
            {t.hero.quiet2}
          </p>
          <p className="hero-mantra">{t.hero.mantra}</p>

          {systemOn && (
            <div className="trade-tabs">
              <button className="trade-tab-btn sub" onClick={() => setShowSubModal(true)}>
                <span className="trade-tab-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </span>
                <span className="trade-tab-text">
                  <strong>{t.hero.tabSub}</strong>
                  <small>{t.hero.tabSubLabel}</small>
                </span>
              </button>
              <button className="trade-tab-btn life" onClick={() => setShowLifeModal(true)}>
                <span className="trade-tab-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </span>
                <span className="trade-tab-text">
                  <strong>{t.hero.tabLife}</strong>
                  <small>{t.hero.tabLifeLabel}</small>
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
          <span className="section-tag">{t.marketProof.tag}</span>
          <h2 className="section-title">
            {t.marketProof.title}<br />{t.marketProof.titleBreak}
          </h2>
          <p className="section-desc">
            {t.marketProof.desc1}<br />
            {t.marketProof.desc2} <strong>{t.marketProof.descBold}</strong>{t.marketProof.desc3}
          </p>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon-box green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
                </svg>
              </div>
              <h3>{t.marketProof.feature1Title}</h3>
              <p>{t.marketProof.feature1Desc}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-box blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>{t.marketProof.feature2Title}</h3>
              <p>{t.marketProof.feature2Desc}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-box emerald">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
              </div>
              <h3>{t.marketProof.feature3Title}</h3>
              <p>{t.marketProof.feature3Desc}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-box red">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                </svg>
              </div>
              <h3>{t.marketProof.feature4Title}</h3>
              <p>{t.marketProof.feature4Desc}</p>
            </div>
          </div>

          <div className="compound-box fade-up">
            <p className="compound-main">
              {t.marketProof.compoundMain1}<br />
              <strong>{t.marketProof.compoundMain2}</strong>{t.marketProof.compoundMain3}
            </p>
            <p className="compound-note">{t.marketProof.compoundNote}</p>
          </div>
        </div>
      </section>

      {/* Section: Market Adaptation */}
      <section className="section section-gradient">
        <div className="section-inner fade-up">
          <span className="section-tag">{t.adaptive.tag}</span>
          <h2 className="section-title">
            {t.adaptive.title1}<br />
            <span className="text-green">{t.adaptive.title2}<br />{t.adaptive.title3}</span>
          </h2>
          <p className="section-desc">
            {t.adaptive.desc1}<br />
            {t.adaptive.desc2}
          </p>

          <div className="strategy-cards">
            <div className="strategy-card bull">
              <div className="strategy-label-lg">{t.adaptive.card1Label}</div>
              <div className="strategy-arrow">&rarr;</div>
              <div className="strategy-label-lg">{t.adaptive.card1Action}</div>
              <div className="strategy-bar bull-bar" />
            </div>
            <div className="strategy-card bear">
              <div className="strategy-label-lg">{t.adaptive.card2Label}</div>
              <div className="strategy-arrow">&rarr;</div>
              <div className="strategy-label-lg">{t.adaptive.card2Action}</div>
              <div className="strategy-bar bear-bar" />
            </div>
          </div>

          <p className="strategy-rule">
            {t.adaptive.rule} <strong>{t.adaptive.ruleBold}</strong> {t.adaptive.ruleSuffix}
          </p>

          <div className="chart-example fade-up">
            <div className="chart-header">
              <span className="chart-dot green-dot" />
              <span>{t.adaptive.chartLabel}</span>
            </div>
            <div className="chart-visual">
              <svg viewBox="0 0 800 200" className="chart-svg">
                <defs>
                  <linearGradient id="greenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polyline points="0,80 80,70 160,90 240,60 320,120 400,150 480,170 560,140 640,160 720,180 800,190" fill="none" stroke="#ef4444" strokeWidth="2" opacity="0.6" />
                <polyline points="0,120 80,110 160,100 240,85 320,70 400,65 480,55 560,50 640,40 720,35 800,25" fill="url(#greenGrad)" stroke="#10b981" strokeWidth="3" />
                <circle cx="320" cy="70" r="5" fill="#10b981" />
                <circle cx="480" cy="55" r="5" fill="#10b981" />
                <circle cx="720" cy="35" r="5" fill="#10b981" />
                <text x="320" y="60" fill="#10b981" fontSize="11" textAnchor="middle">{t.adaptive.chartProfit}</text>
                <text x="480" y="45" fill="#10b981" fontSize="11" textAnchor="middle">{t.adaptive.chartProfit}</text>
                <text x="720" y="25" fill="#10b981" fontSize="11" textAnchor="middle">{t.adaptive.chartProfit}</text>
              </svg>
              <div className="chart-legend">
                <span className="legend-item"><span className="legend-line red-line" />{t.adaptive.legendMarket}</span>
                <span className="legend-item"><span className="legend-line green-line" />{t.adaptive.legendProfit}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Trading Process */}
      <section className="section section-dark" id="process">
        <div className="section-inner fade-up">
          <span className="section-tag">{t.structure.tag}</span>
          <h2 className="section-title">{t.structure.title}</h2>
          <p className="section-desc">{t.structure.desc}</p>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>{t.structure.step1Title}</h3>
                <p>{t.structure.step1Desc1}<br />{t.structure.step1Desc2}</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>{t.structure.step2Title}</h3>
                <p>{t.structure.step2Desc1}<br />{t.structure.step2Desc2}</p>
              </div>
            </div>
            <div className="process-step step-with-stat">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>{t.structure.step3Title}</h3>
                <p>{t.structure.step3Desc}</p>
              </div>
              <div className="stat-row">
                <div className="stat-item">
                  <span className="stat-value">70%</span>
                  <span className="stat-name">{t.structure.statWinRate}</span>
                </div>
                <div className="stat-divider" />
                <div className="stat-item">
                  <span className="stat-value">2.9</span>
                  <span className="stat-name">{t.structure.statRR}</span>
                </div>
                <div className="stat-divider" />
                <div className="stat-item">
                  <span className="stat-value">6yr</span>
                  <span className="stat-name">{t.structure.statPeriod}</span>
                </div>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3>{t.structure.step4Title}</h3>
                <p>{t.structure.step4Desc1}<br />{t.structure.step4Desc2} <strong>{t.structure.step4Bold}</strong>{t.structure.step4Desc3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Easy Setup */}
      <section className="section section-gradient" id="start">
        <div className="section-inner fade-up">
          <span className="section-tag">{t.easyStart.tag}</span>
          <h2 className="section-title">
            {t.easyStart.title1}<br />
            <span className="text-green">{t.easyStart.title2}</span>
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
              <h3>{t.easyStart.step1Title}</h3>
              <p>{t.easyStart.step1Desc.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}</p>
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
              <h3>{t.easyStart.step2Title}</h3>
              <p>{t.easyStart.step2Desc.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}</p>
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
              <h3>{t.easyStart.step3Title}</h3>
              <p>{t.easyStart.step3Desc.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}</p>
            </div>
          </div>

          <p className="setup-note">
            {t.easyStart.note1} <span className="signal-bot-text">{t.easyStart.noteBot}</span>{t.easyStart.note2}<br />
            {t.easyStart.note3}
          </p>
        </div>
      </section>

      {/* Section: Target Users */}
      <section className="section section-dark">
        <div className="section-inner fade-up">
          <span className="section-tag">{t.target.tag}</span>
          <h2 className="section-title">{t.target.title}</h2>

          <div className="target-grid">
            {[t.target.item1, t.target.item2, t.target.item3, t.target.item4].map((item, i) => (
              <div className="target-card" key={i}>
                <div className="target-check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="signup-links">
            <a href="#" className="signup-link-btn tradingview" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="signup-icon">
                <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
              </svg>
              {t.target.tvLink}
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
              {t.target.okxLink}
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
          <h2 className="cta-title">
            {t.cta.title1}<br />
            {t.cta.title2}<br />
            {t.cta.title3}
          </h2>
          <p className="cta-sub">{t.cta.sub}</p>
          <p className="cta-phrase">
            {t.cta.phrase1}<br />
            <span className="text-muted">{t.cta.phrase2}</span>
          </p>

          <div className="pricing-cards">
            <div className="pricing-card">
              <div className="pricing-badge">{t.cta.subBadge}</div>
              <h3>{t.cta.subTitle}</h3>
              <p>{t.cta.subDesc1}<br />{t.cta.subDesc2}</p>
              <button className="pricing-btn" onClick={() => setShowSubModal(true)}>{t.cta.subBtn}</button>
              <div className="pricing-card-links">
                <a href="#" className="pricing-icon-link" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="pricing-link-svg youtube-svg">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  {t.cta.subVideo}
                </a>
              </div>
            </div>

            <div className="pricing-card featured">
              <div className="pricing-badge">{t.cta.lifeBadge}</div>
              <h3>{t.cta.lifeTitle}</h3>
              <p>{t.cta.lifeDesc1}<br />{t.cta.lifeDesc2}</p>
              <button className="pricing-btn primary" onClick={() => setShowLifeModal(true)}>{t.cta.lifeBtn}</button>
              <div className="pricing-card-links">
                <a href="#" className="pricing-icon-link" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="pricing-link-svg youtube-svg">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  {t.cta.lifeVideo}
                </a>
              </div>
            </div>
          </div>

          <div className="cta-actions">
            <a href="#" className="cta-telegram-btn" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" className="cta-telegram-icon">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              {t.cta.telegram}
            </a>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="section section-dark disclaimer-section">
        <div className="section-inner fade-up">
          <h2 className="section-title disclaimer-title">{t.disclaimer.title}</h2>
          <div className="disclaimer-box">
            <p className="disclaimer-youtube-link">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" className="disclaimer-yt-icon">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                {t.disclaimer.youtube}
              </a>
            </p>
            <p className="disclaimer-heading">{t.disclaimer.heading}</p>
            <ol className="disclaimer-list">
              <li>{t.disclaimer.item1}</li>
              <li>{t.disclaimer.item2}</li>
              <li>{t.disclaimer.item3}</li>
              <li>{t.disclaimer.item4}</li>
              <li>{t.disclaimer.item5}</li>
            </ol>

            <div className="notice-link-wrap" onClick={() => setShowNoticeModal(true)}>
              <span className="notice-link-icon">📢</span>
              <span className="notice-link-text">{t.disclaimer.noticeLink}</span>
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
            {t.footer.disclaimer}<br />
            {t.footer.disclaimer2}
          </p>
          <p className="footer-copy">{t.footer.copy}</p>
        </div>
      </footer>

      {/* ===== MODALS ===== */}

      {showSubModal && (
        <div className="modal-overlay" onClick={() => setShowSubModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowSubModal(false)}>&times;</button>
            <h2 className="modal-title">{t.subModal.title}</h2>
            <div className="modal-body">
              <ol className="modal-list">
                <li>{t.subModal.item1} <span className="modal-highlight">{t.subModal.item1Highlight}</span>{t.subModal.item1Suffix}</li>
                <li>{t.subModal.item2}</li>
                <li>{t.subModal.item3}</li>
                <li>{t.subModal.item4}</li>
                <li>{t.subModal.item5}</li>
                <li>{t.subModal.item6}</li>
                <li>{t.subModal.item7}</li>
              </ol>
            </div>
            <div className="modal-signal-btns">
              {[t.subModal.btn1, t.subModal.btn2, t.subModal.btn3, t.subModal.btn4, t.subModal.btn5].map((btn, i) => (
                <a key={i} href="#" className="modal-signal-btn" target="_blank" rel="noopener noreferrer">{btn}</a>
              ))}
            </div>
          </div>
        </div>
      )}

      {showLifeModal && (
        <div className="modal-overlay" onClick={() => setShowLifeModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowLifeModal(false)}>&times;</button>
            <h2 className="modal-title">{t.lifeModal.title}</h2>
            <div className="modal-body">
              <ol className="modal-list">
                <li>
                  {t.lifeModal.item1} <strong>{t.lifeModal.item1Bold}</strong> {t.lifeModal.item1Suffix}
                  <p className="modal-tip">{t.lifeModal.tip}</p>
                </li>
                <li>{t.lifeModal.item2}</li>
                <li>{t.lifeModal.item3}</li>
                <li>{t.lifeModal.item4}</li>
              </ol>
            </div>
            <div className="modal-signal-btns">
              <button className="modal-signal-btn primary" onClick={() => { setShowLifeModal(false); setShowPaymentModal(true); }}>
                {t.lifeModal.payBtn}
              </button>
            </div>
          </div>
        </div>
      )}

      {showPaymentModal && (
        <div className="modal-overlay" onClick={() => setShowPaymentModal(false)}>
          <div className="modal-box modal-box-sm" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowPaymentModal(false)}>&times;</button>
            <h2 className="modal-title">{t.paymentModal.title}</h2>
            <div className="modal-body payment-body">
              <div className="qr-placeholder">
                <div className="qr-box">
                  <svg viewBox="0 0 100 100" width="160" height="160">
                    <rect width="100" height="100" fill="#1e293b" rx="8" />
                    <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fill="#64748b" fontSize="10">{t.paymentModal.qrPlaceholder}</text>
                    <text x="50" y="65" textAnchor="middle" dominantBaseline="middle" fill="#475569" fontSize="7">{t.paymentModal.qrSoon}</text>
                  </svg>
                </div>
              </div>
              <p className="wallet-label">{t.paymentModal.walletLabel}</p>
              <div className="wallet-address">
                <code>{t.paymentModal.walletAddress}</code>
              </div>
              <p className="payment-note">
                {t.paymentModal.note1}<br />
                {t.paymentModal.note2}<br />
                {t.paymentModal.note3}
              </p>
            </div>
          </div>
        </div>
      )}

      {showNoticeModal && (
        <div className="modal-overlay" onClick={() => setShowNoticeModal(false)}>
          <div className="modal-box modal-box-lg" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowNoticeModal(false)}>&times;</button>
            <h2 className="modal-title">{t.noticeModal.title}</h2>
            <p className="notice-modal-sub">{t.noticeModal.sub}</p>
            <div className="modal-body notice-modal-body">
              {[
                [t.noticeModal.n1Title, t.noticeModal.n1Desc],
                [t.noticeModal.n2Title, t.noticeModal.n2Desc],
                [t.noticeModal.n3Title, t.noticeModal.n3Desc],
                [t.noticeModal.n4Title, t.noticeModal.n4Desc],
                [t.noticeModal.n5Title, t.noticeModal.n5Desc],
                [t.noticeModal.n6Title, t.noticeModal.n6Desc],
                [t.noticeModal.n7Title, t.noticeModal.n7Desc],
                [t.noticeModal.n8Title, t.noticeModal.n8Desc],
                [t.noticeModal.n9Title, t.noticeModal.n9Desc],
                [t.noticeModal.n10Title, t.noticeModal.n10Desc],
              ].map(([title, desc], i) => (
                <div className="notice-item" key={i}>
                  <strong>{title}</strong>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Landing;
