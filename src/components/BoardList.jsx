import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';

const BoardList = ({ onSelect, onNew }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get('/posts'); // 엔드포인트는 백엔드에 맞춰 조정 필요
      setPosts(response.data);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
      // 데모용 가상 데이터 (백엔드 미연결 시)
      setPosts([
        { id: 1, title: '첫 번째 게시글입니다', author: '관리자', created_at: '2024-04-20' },
        { id: 2, title: 'Antigravity로 만드는 게시판', author: 'AI', created_at: '2024-04-20' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div style={{textAlign: 'center', padding: '2rem'}}>로딩 중...</div>;

  return (
    <div className="card">
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem'}}>
        <h2 style={{fontSize: '1.5rem'}}>게시글 목록</h2>
        <button className="btn btn-primary" onClick={onNew}>새 글 쓰기</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id} onClick={() => onSelect(post.id)} style={{cursor: 'pointer'}}>
              <td><span className="badge">{post.id}</span></td>
              <td>{post.title}</td>
              <td>{post.author}</td>
              <td style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>{post.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {posts.length === 0 && <div style={{textAlign: 'center', padding: '2rem', color: 'var(--text-muted)'}}>게시글이 없습니다.</div>}
    </div>
  );
};

export default BoardList;
