import React, { useState } from 'react';
import './App.css';

// Header 컴포넌트\
const Header = ({ activeTab, setActiveTab }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <h1>React Boilerplate</h1>
          <nav>
            <ul className="nav-list">
              <li>
                <button 
                  onClick={() => setActiveTab('home')}
                  className={activeTab === 'home' ? 'nav-active' : ''}
                >
                  홈
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('about')}
                  className={activeTab === 'about' ? 'nav-active' : ''}
                >
                  소개
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('contact')}
                  className={activeTab === 'contact' ? 'nav-active' : ''}
                >
                  연락처
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

// 카운터 컴포넌트
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="counter">
      <h3>클릭: {count}</h3>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(0)}>리셋</button>
    </div>
  );
}

// 할일 목록 컴포넌트
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input }]);
      setInput('');
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-list">
      <h3>키워드 목록</h3>
      <div className="todo-input">
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="키워드를 입력하세요"
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo}>추가</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            {todo.text}
            <button onClick={() => removeTodo(todo.id)} className="delete-btn">삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 메인 콘텐츠 컴포넌트
function MainContent({ activeTab }) {
  const renderContent = () => {
    switch(activeTab) {
      case 'home':
        return (
          <div>
            <h2>BOILERPLATE</h2>
            <p>Babel + Webpack</p>
            <Counter />
          </div>
        );
      case 'about':
        return (
          <div>
            <h2>소개</h2>
            <p>Cow Dog</p>
            <TodoList />
          </div>
        );
      case 'contact':
        return (
          <div>
            <h2>연락처</h2>
            <p>000-1111-2222</p>
          </div>
        );
      default:
        return <div>페이지를 찾을 수 없습니다.</div>;
    }
  };

  return (
    <main className="main-content">
      <div className="container">
        <div className="content">
          {renderContent()}
        </div>
      </div>
    </main>
  );
}

// Footer 컴포넌트
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>KCD Boilerplate React</p>
      </div>
    </footer>
  );
}

// 메인 App 컴포넌트
function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="App">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <MainContent activeTab={activeTab} />
      <Footer />
    </div>
  );
}

export default App;