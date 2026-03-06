const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Traide JW API is running' });
});

// Indicator purchase request
app.post('/api/indicator-purchase', (req, res) => {
  const { tradingViewNickname, walletAddress } = req.body;
  if (!tradingViewNickname) {
    return res.status(400).json({ success: false, message: '트레이딩뷰 닉네임을 입력해주세요.' });
  }
  console.log(`[지표 신청] 닉네임: ${tradingViewNickname}, 지갑: ${walletAddress}`);
  // TODO: OKX API 연동 → 입금 확인 후 TradingView 지표 권한 승인
  res.json({ success: true, message: '신청이 접수되었습니다.', nickname: tradingViewNickname });
});

// Sample data endpoint
app.get('/api/data', (req, res) => {
  res.json({
    items: [
      { id: 1, title: '항목 1', description: '첫 번째 데이터입니다.' },
      { id: 2, title: '항목 2', description: '두 번째 데이터입니다.' },
      { id: 3, title: '항목 3', description: '세 번째 데이터입니다.' },
    ],
  });
});

// Production: serve React build
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
