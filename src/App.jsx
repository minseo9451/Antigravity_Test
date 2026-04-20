import React, { useState } from 'react';
import BoardList from './components/BoardList';
import BoardForm from './components/BoardForm';
import './index.css';

function App() {
  const [view, setView] = useState('list'); // 'list', 'form'
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handleSelectPost = (id) => {
    setSelectedPostId(id);
    setView('form');
  };

  const handleNewPost = () => {
    setSelectedPostId(null);
    setView('form');
  };

  const handleSuccess = () => {
    setView('list');
  };

  return (
    <div className="container">
      <header>
        <h1>REST API Bulletin Board</h1>
        <p style={{color: 'var(--text-muted)'}}>React + Axios + MySQL (Vibe Coding)</p>
      </header>
      
      <main>
        {view === 'list' ? (
          <BoardList 
            onSelect={handleSelectPost} 
            onNew={handleNewPost} 
          />
        ) : (
          <BoardForm 
            postId={selectedPostId} 
            onCancel={() => setView('list')} 
            onSuccess={handleSuccess}
          />
        )}
      </main>
      
      <footer style={{marginTop: '4rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem'}}>
        &copy; 2026 Antigravity Board. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
