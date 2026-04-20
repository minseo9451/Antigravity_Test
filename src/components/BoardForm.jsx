import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';

const BoardForm = ({ postId, onCancel, onSuccess }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (postId) {
      fetchPost();
    }
  }, [postId]);

  const fetchPost = async () => {
    try {
      const response = await axiosInstance.get(`/posts/${postId}`);
      setFormData(response.data);
    } catch (error) {
      console.error('Failed to fetch post details:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (postId) {
        await axiosInstance.put(`/posts/${postId}`, formData);
      } else {
        await axiosInstance.post('/posts', formData);
      }
      onSuccess();
    } catch (error) {
      alert('저장에 실패했습니다.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;
    try {
      await axiosInstance.delete(`/posts/${postId}`);
      onSuccess();
    } catch (error) {
      alert('삭제에 실패했습니다.');
    }
  };

  return (
    <div className="card">
      <h2 style={{marginBottom: '1.5rem'}}>{postId ? '글 수정하기' : '새 게시글 작성'}</h2>
      <form onSubmit={handleSubmit}>
        <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)'}}>작성자</label>
        <input 
          name="author" 
          value={formData.author} 
          onChange={handleChange} 
          placeholder="이름을 입력하세요" 
          required 
          disabled={postId}
        />
        
        <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)'}}>제목</label>
        <input 
          name="title" 
          value={formData.title} 
          onChange={handleChange} 
          placeholder="제목을 입력하세요" 
          required 
        />
        
        <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)'}}>내용</label>
        <textarea 
          name="content" 
          value={formData.content} 
          onChange={handleChange} 
          placeholder="내용을 입력하세요" 
          rows="10" 
          required 
        />
        
        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '1rem'}}>
          <div style={{display: 'flex', gap: '0.5rem'}}>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? '처리 중...' : (postId ? '수정 완료' : '등록하기')}
            </button>
            <button type="button" className="btn" onClick={onCancel} style={{background: 'rgba(255,255,255,0.05)'}}>취소</button>
          </div>
          {postId && (
            <button type="button" className="btn" onClick={handleDelete} style={{color: '#f87171', background: 'rgba(239, 68, 68, 0.1)'}}>
              삭제
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default BoardForm;
