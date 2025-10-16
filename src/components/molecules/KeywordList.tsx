import React, { useState } from 'react';

const KeywordList = () => {
    const [keywords, setKeywords] = useState([]);
    const [input, setInput] = useState('');
  
    const addKeyword = () => {
        if (input.trim()) {
            setKeywords([...keywords, { id: Date.now(), text: input }]);
            setInput('');
        }
    };

    const removeKeyword = (id) => {
        setKeywords(keywords.filter(keyword => keyword.id !== id));
    };

    return (
        <div className="todo-list">
            <h3>키워드 목록</h3>
            <div className="todo-input">
                <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="키워드를 입력하세요"
                    onKeyPress={(e) => e.key === 'Enter' && addKeyword()}
                />
                <button onClick={addKeyword}>추가</button>
            </div>
            <ul>
                {keywords.map(keyword => (
                    <li key={keyword.id} className="todo-item">
                        {keyword.text}
                        <button onClick={() => removeKeyword(keyword.id)} className="delete-btn">
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default KeywordList;