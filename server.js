const http = require('http');

// サーバーを作成
const server = http.createServer((req, res) => {
    // レスポンス設定
    res.statusCode = 200; // HTTPステータスコード: 200（成功）
    res.setHeader('Content-Type', 'text/plain'); // プレーンテキスト形式を設定
    res.end('Hello, World!\n'); // レスポンスの内容
});

// サーバーを起動
const PORT = 3000; // サーバーのポート番号
server.listen(PORT, () => {
    console.log(`サーバーが http://localhost:${PORT} で動作中`);
});
