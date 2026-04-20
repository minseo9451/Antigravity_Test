const express = require('express');
const cors = require('cors');
const { pool, initDb } = require('./db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// 데이터베이스 초기화 실행
initDb();

// 1. 전체 게시글 조회
app.get('/api/posts', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM posts ORDER BY created_at DESC');
    res.json(rows);
  } catch (err) {
    console.error('GET /api/posts Error:', err);
    res.status(500).json({ error: err.message });
  }
});

// 2. 특정 게시글 조회
app.get('/api/posts/:id', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM posts WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ message: 'Post not found' });
    res.json(rows[0]);
  } catch (err) {
    console.error('GET /api/posts/:id Error:', err);
    res.status(500).json({ error: err.message });
  }
});

// 3. 게시글 등록
app.post('/api/posts', async (req, res) => {
  const { title, content, author } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO posts (title, content, author) VALUES (?, ?, ?)',
      [title, content, author]
    );
    res.status(201).json({ id: result.insertId, title, content, author });
  } catch (err) {
    console.error('POST /api/posts Error:', err);
    res.status(500).json({ error: err.message });
  }
});

// 4. 게시글 수정
app.put('/api/posts/:id', async (req, res) => {
  const { title, content } = req.body;
  try {
    await pool.query(
      'UPDATE posts SET title = ?, content = ? WHERE id = ?',
      [title, content, req.params.id]
    );
    res.json({ message: 'Updated successfully' });
  } catch (err) {
    console.error('PUT /api/posts/:id Error:', err);
    res.status(500).json({ error: err.message });
  }
});

// 5. 게시글 삭제
app.delete('/api/posts/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM posts WHERE id = ?', [req.params.id]);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    console.error('DELETE /api/posts/:id Error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
