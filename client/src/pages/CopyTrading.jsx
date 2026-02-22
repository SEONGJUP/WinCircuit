import { useNavigate } from 'react-router-dom';
import './CopyTrading.css';

function CopyTrading() {
  const navigate = useNavigate();

  const OKX_COPY_TRADING_URL = 'https://www.okx.com/copy-trading';

  return (
    <div className="copytrading">
      {/* Navigation */}
      <nav className="ct-nav">
        <div className="ct-nav-inner">
          <div className="ct-logo" onClick={() => navigate('/')}>
            <span className="ct-logo-icon">W</span>
            <span>WinCircuit</span>
          </div>
          <button className="ct-back-btn" onClick={() => navigate('/')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            돌아가기
          </button>
        </div>
      </nav>

      <main className="ct-main">
        {/* Hero */}
        <section className="ct-hero">
          <span className="ct-badge">COPY TRADING</span>
          <h1 className="ct-title">
            WinCircuit의 매매를<br />
            <span className="ct-accent">그대로 복사하세요.</span>
          </h1>
          <p className="ct-desc">
            OKX 해외선물거래소에서 카피트레이딩을 구독하면<br />
            WinCircuit의 모든 포지션이 자동으로 복제됩니다.
          </p>
        </section>

        {/* Benefits */}
        <section className="ct-benefits">
          <div className="ct-benefit-card">
            <div className="ct-benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3>검증된 전략</h3>
            <p>6년간 백테스트 검증된<br />시스템 매매를 그대로</p>
          </div>
          <div className="ct-benefit-card">
            <div className="ct-benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <h3>자동 실행</h3>
            <p>구독만 하면 진입부터<br />청산까지 자동으로</p>
          </div>
          <div className="ct-benefit-card">
            <div className="ct-benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3>24/7 운영</h3>
            <p>당신이 자는 동안에도<br />시스템은 작동합니다</p>
          </div>
        </section>

        {/* Steps */}
        <section className="ct-steps">
          <h2 className="ct-section-title">구독 방법</h2>
          <div className="ct-step-list">
            <div className="ct-step">
              <div className="ct-step-num">1</div>
              <div className="ct-step-text">
                <h3>OKX 계정 생성</h3>
                <p>OKX 거래소에서 계정을 만들고 본인인증을 완료합니다.</p>
              </div>
            </div>
            <div className="ct-step">
              <div className="ct-step-num">2</div>
              <div className="ct-step-text">
                <h3>카피트레이딩 메뉴 진입</h3>
                <p>OKX 앱 또는 웹에서 '카피트레이딩' 메뉴로 이동합니다.</p>
              </div>
            </div>
            <div className="ct-step">
              <div className="ct-step-num">3</div>
              <div className="ct-step-text">
                <h3>WinCircuit 트레이더 구독</h3>
                <p>WinCircuit 트레이더를 검색하고 구독 버튼을 클릭합니다.</p>
              </div>
            </div>
            <div className="ct-step">
              <div className="ct-step-num">4</div>
              <div className="ct-step-text">
                <h3>자동 매매 시작</h3>
                <p>구독 완료 즉시, 모든 매매가 자동으로 복제됩니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="ct-cta">
          <div className="ct-cta-glow" />
          <h2>지금 바로 시작하세요</h2>
          <p>감정 없이, 시스템대로.</p>
          <a
            href={OKX_COPY_TRADING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ct-cta-btn"
          >
            OKX 카피트레이딩 바로가기
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
          <p className="ct-cta-note">
            * OKX 거래소 사이트로 이동됩니다.
          </p>
        </section>
      </main>
    </div>
  );
}

export default CopyTrading;
