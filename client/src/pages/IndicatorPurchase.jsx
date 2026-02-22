import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './IndicatorPurchase.css';

function IndicatorPurchase() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const WALLET_ADDRESS = '0x1a2B3c4D5e6F7890aBcDeF1234567890AbCdEf12';

  const handleCopy = () => {
    navigator.clipboard.writeText(WALLET_ADDRESS).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nickname.trim()) return;

    setLoading(true);
    try {
      const res = await fetch('/api/indicator-purchase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tradingViewNickname: nickname.trim(), walletAddress: WALLET_ADDRESS }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="indicator-purchase">
      {/* Navigation */}
      <nav className="ip-nav">
        <div className="ip-nav-inner">
          <div className="ip-logo" onClick={() => navigate('/')}>
            <span className="ip-logo-icon">W</span>
            <span>WinCircuit</span>
          </div>
          <button className="ip-back-btn" onClick={() => navigate('/')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            돌아가기
          </button>
        </div>
      </nav>

      <main className="ip-main">
        {/* Hero */}
        <section className="ip-hero">
          <span className="ip-badge">PREMIUM INDICATOR</span>
          <h1 className="ip-title">
            WinCircuit 지표를<br />
            <span className="ip-accent">트레이딩뷰에서 직접 사용하세요.</span>
          </h1>
          <p className="ip-desc">
            입금 확인 후, 입력하신 트레이딩뷰 닉네임으로<br />
            지표 접근 권한이 즉시 승인됩니다.
          </p>
        </section>

        {!submitted ? (
          <>
            {/* Payment Section */}
            <section className="ip-payment">
              <h2 className="ip-section-title">입금 안내</h2>

              <div className="ip-payment-box">
                {/* QR Code */}
                <div className="ip-qr-area">
                  <div className="ip-qr-frame">
                    <svg viewBox="0 0 200 200" className="ip-qr-svg">
                      {/* QR Code Pattern */}
                      <rect x="0" y="0" width="200" height="200" fill="#ffffff" rx="8" />

                      {/* Top-left finder */}
                      <rect x="12" y="12" width="42" height="42" fill="#000" rx="4" />
                      <rect x="18" y="18" width="30" height="30" fill="#fff" rx="2" />
                      <rect x="24" y="24" width="18" height="18" fill="#000" rx="2" />

                      {/* Top-right finder */}
                      <rect x="146" y="12" width="42" height="42" fill="#000" rx="4" />
                      <rect x="152" y="18" width="30" height="30" fill="#fff" rx="2" />
                      <rect x="158" y="24" width="18" height="18" fill="#000" rx="2" />

                      {/* Bottom-left finder */}
                      <rect x="12" y="146" width="42" height="42" fill="#000" rx="4" />
                      <rect x="18" y="152" width="30" height="30" fill="#fff" rx="2" />
                      <rect x="24" y="158" width="18" height="18" fill="#000" rx="2" />

                      {/* Timing patterns */}
                      <rect x="60" y="18" width="6" height="6" fill="#000" />
                      <rect x="72" y="18" width="6" height="6" fill="#000" />
                      <rect x="84" y="18" width="6" height="6" fill="#000" />
                      <rect x="96" y="18" width="6" height="6" fill="#000" />
                      <rect x="108" y="18" width="6" height="6" fill="#000" />
                      <rect x="120" y="18" width="6" height="6" fill="#000" />
                      <rect x="132" y="18" width="6" height="6" fill="#000" />

                      <rect x="18" y="60" width="6" height="6" fill="#000" />
                      <rect x="18" y="72" width="6" height="6" fill="#000" />
                      <rect x="18" y="84" width="6" height="6" fill="#000" />
                      <rect x="18" y="96" width="6" height="6" fill="#000" />
                      <rect x="18" y="108" width="6" height="6" fill="#000" />
                      <rect x="18" y="120" width="6" height="6" fill="#000" />
                      <rect x="18" y="132" width="6" height="6" fill="#000" />

                      {/* Data modules - row patterns */}
                      <rect x="66" y="30" width="6" height="6" fill="#000" />
                      <rect x="78" y="30" width="6" height="6" fill="#000" />
                      <rect x="96" y="30" width="6" height="6" fill="#000" />
                      <rect x="114" y="30" width="6" height="6" fill="#000" />
                      <rect x="126" y="30" width="6" height="6" fill="#000" />

                      <rect x="60" y="42" width="6" height="6" fill="#000" />
                      <rect x="72" y="42" width="6" height="6" fill="#000" />
                      <rect x="90" y="42" width="6" height="6" fill="#000" />
                      <rect x="102" y="42" width="6" height="6" fill="#000" />
                      <rect x="120" y="42" width="6" height="6" fill="#000" />
                      <rect x="138" y="42" width="6" height="6" fill="#000" />

                      {/* Middle area data */}
                      <rect x="60" y="60" width="6" height="6" fill="#000" />
                      <rect x="72" y="60" width="6" height="6" fill="#000" />
                      <rect x="84" y="60" width="6" height="6" fill="#000" />
                      <rect x="102" y="60" width="6" height="6" fill="#000" />
                      <rect x="120" y="60" width="6" height="6" fill="#000" />
                      <rect x="138" y="60" width="6" height="6" fill="#000" />
                      <rect x="150" y="60" width="6" height="6" fill="#000" />
                      <rect x="168" y="60" width="6" height="6" fill="#000" />
                      <rect x="180" y="60" width="6" height="6" fill="#000" />

                      <rect x="60" y="72" width="6" height="6" fill="#000" />
                      <rect x="78" y="72" width="6" height="6" fill="#000" />
                      <rect x="96" y="72" width="6" height="6" fill="#000" />
                      <rect x="108" y="72" width="6" height="6" fill="#000" />
                      <rect x="126" y="72" width="6" height="6" fill="#000" />
                      <rect x="144" y="72" width="6" height="6" fill="#000" />
                      <rect x="162" y="72" width="6" height="6" fill="#000" />
                      <rect x="174" y="72" width="6" height="6" fill="#000" />

                      <rect x="30" y="84" width="6" height="6" fill="#000" />
                      <rect x="42" y="84" width="6" height="6" fill="#000" />
                      <rect x="66" y="84" width="6" height="6" fill="#000" />
                      <rect x="84" y="84" width="6" height="6" fill="#000" />
                      <rect x="102" y="84" width="6" height="6" fill="#000" />
                      <rect x="114" y="84" width="6" height="6" fill="#000" />
                      <rect x="132" y="84" width="6" height="6" fill="#000" />
                      <rect x="150" y="84" width="6" height="6" fill="#000" />
                      <rect x="168" y="84" width="6" height="6" fill="#000" />

                      <rect x="30" y="96" width="6" height="6" fill="#000" />
                      <rect x="48" y="96" width="6" height="6" fill="#000" />
                      <rect x="72" y="96" width="6" height="6" fill="#000" />
                      <rect x="90" y="96" width="6" height="6" fill="#000" />
                      <rect x="108" y="96" width="6" height="6" fill="#000" />
                      <rect x="120" y="96" width="6" height="6" fill="#000" />
                      <rect x="138" y="96" width="6" height="6" fill="#000" />
                      <rect x="156" y="96" width="6" height="6" fill="#000" />
                      <rect x="174" y="96" width="6" height="6" fill="#000" />

                      <rect x="36" y="108" width="6" height="6" fill="#000" />
                      <rect x="54" y="108" width="6" height="6" fill="#000" />
                      <rect x="66" y="108" width="6" height="6" fill="#000" />
                      <rect x="84" y="108" width="6" height="6" fill="#000" />
                      <rect x="96" y="108" width="6" height="6" fill="#000" />
                      <rect x="114" y="108" width="6" height="6" fill="#000" />
                      <rect x="132" y="108" width="6" height="6" fill="#000" />
                      <rect x="144" y="108" width="6" height="6" fill="#000" />
                      <rect x="162" y="108" width="6" height="6" fill="#000" />
                      <rect x="180" y="108" width="6" height="6" fill="#000" />

                      <rect x="30" y="120" width="6" height="6" fill="#000" />
                      <rect x="48" y="120" width="6" height="6" fill="#000" />
                      <rect x="60" y="120" width="6" height="6" fill="#000" />
                      <rect x="78" y="120" width="6" height="6" fill="#000" />
                      <rect x="90" y="120" width="6" height="6" fill="#000" />
                      <rect x="108" y="120" width="6" height="6" fill="#000" />
                      <rect x="126" y="120" width="6" height="6" fill="#000" />
                      <rect x="138" y="120" width="6" height="6" fill="#000" />
                      <rect x="156" y="120" width="6" height="6" fill="#000" />
                      <rect x="174" y="120" width="6" height="6" fill="#000" />

                      <rect x="42" y="132" width="6" height="6" fill="#000" />
                      <rect x="54" y="132" width="6" height="6" fill="#000" />
                      <rect x="72" y="132" width="6" height="6" fill="#000" />
                      <rect x="84" y="132" width="6" height="6" fill="#000" />
                      <rect x="102" y="132" width="6" height="6" fill="#000" />
                      <rect x="120" y="132" width="6" height="6" fill="#000" />
                      <rect x="138" y="132" width="6" height="6" fill="#000" />
                      <rect x="156" y="132" width="6" height="6" fill="#000" />
                      <rect x="168" y="132" width="6" height="6" fill="#000" />

                      {/* Bottom-right data */}
                      <rect x="66" y="150" width="6" height="6" fill="#000" />
                      <rect x="84" y="150" width="6" height="6" fill="#000" />
                      <rect x="96" y="150" width="6" height="6" fill="#000" />
                      <rect x="114" y="150" width="6" height="6" fill="#000" />
                      <rect x="132" y="150" width="6" height="6" fill="#000" />
                      <rect x="150" y="150" width="6" height="6" fill="#000" />
                      <rect x="168" y="150" width="6" height="6" fill="#000" />

                      <rect x="60" y="162" width="6" height="6" fill="#000" />
                      <rect x="78" y="162" width="6" height="6" fill="#000" />
                      <rect x="90" y="162" width="6" height="6" fill="#000" />
                      <rect x="108" y="162" width="6" height="6" fill="#000" />
                      <rect x="126" y="162" width="6" height="6" fill="#000" />
                      <rect x="144" y="162" width="6" height="6" fill="#000" />
                      <rect x="162" y="162" width="6" height="6" fill="#000" />
                      <rect x="180" y="162" width="6" height="6" fill="#000" />

                      <rect x="66" y="174" width="6" height="6" fill="#000" />
                      <rect x="84" y="174" width="6" height="6" fill="#000" />
                      <rect x="102" y="174" width="6" height="6" fill="#000" />
                      <rect x="114" y="174" width="6" height="6" fill="#000" />
                      <rect x="138" y="174" width="6" height="6" fill="#000" />
                      <rect x="156" y="174" width="6" height="6" fill="#000" />
                      <rect x="174" y="174" width="6" height="6" fill="#000" />

                      {/* Alignment pattern */}
                      <rect x="146" y="146" width="18" height="18" fill="#000" rx="2" />
                      <rect x="150" y="150" width="10" height="10" fill="#fff" rx="1" />
                      <rect x="153" y="153" width="4" height="4" fill="#000" rx="1" />
                    </svg>
                  </div>
                  <p className="ip-qr-label">QR 스캔하여 입금</p>
                </div>

                {/* Wallet Address */}
                <div className="ip-wallet-area">
                  <div className="ip-network-tag">
                    <span className="ip-network-dot" />
                    USDT (TRC-20)
                  </div>
                  <h3>입금 주소</h3>
                  <div className="ip-address-box">
                    <code className="ip-address">{WALLET_ADDRESS}</code>
                    <button className="ip-copy-btn" onClick={handleCopy}>
                      {copied ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                        </svg>
                      )}
                      {copied ? '복사됨' : '복사'}
                    </button>
                  </div>
                  <div className="ip-warning">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                      <line x1="12" y1="9" x2="12" y2="13" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                    반드시 TRC-20 네트워크로 전송하세요. 다른 네트워크로 전송 시 자산이 유실될 수 있습니다.
                  </div>
                </div>
              </div>
            </section>

            {/* Nickname Form */}
            <section className="ip-form-section">
              <h2 className="ip-section-title">트레이딩뷰 닉네임 입력</h2>
              <p className="ip-form-desc">
                입금 확인 후, 아래 닉네임으로 지표 권한이 부여됩니다.
              </p>
              <form className="ip-form" onSubmit={handleSubmit}>
                <div className="ip-input-group">
                  <label htmlFor="tv-nickname">TradingView 닉네임</label>
                  <input
                    id="tv-nickname"
                    type="text"
                    placeholder="예: trader_wincircuit"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="ip-submit-btn" disabled={loading || !nickname.trim()}>
                  {loading ? '처리 중...' : '지표 권한 신청하기'}
                </button>
              </form>
            </section>

            {/* Process Info */}
            <section className="ip-process">
              <h2 className="ip-section-title">승인 절차</h2>
              <div className="ip-process-steps">
                <div className="ip-pstep">
                  <div className="ip-pstep-num">1</div>
                  <p>위 주소로 USDT 입금</p>
                </div>
                <div className="ip-pstep-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
                <div className="ip-pstep">
                  <div className="ip-pstep-num">2</div>
                  <p>트레이딩뷰 닉네임 입력</p>
                </div>
                <div className="ip-pstep-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
                <div className="ip-pstep">
                  <div className="ip-pstep-num">3</div>
                  <p>입금 확인 (자동)</p>
                </div>
                <div className="ip-pstep-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
                <div className="ip-pstep">
                  <div className="ip-pstep-num">4</div>
                  <p>지표 권한 승인</p>
                </div>
              </div>
            </section>
          </>
        ) : (
          /* Success State */
          <section className="ip-success">
            <div className="ip-success-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h2>신청이 완료되었습니다</h2>
            <p>
              <strong>{nickname}</strong> 닉네임으로 신청되었습니다.<br />
              입금 확인 후 트레이딩뷰에서 지표 접근 권한이 승인됩니다.
            </p>
            <p className="ip-success-note">
              일반적으로 입금 확인까지 10~30분 소요됩니다.
            </p>
            <button className="ip-home-btn" onClick={() => navigate('/')}>
              홈으로 돌아가기
            </button>
          </section>
        )}
      </main>
    </div>
  );
}

export default IndicatorPurchase;
