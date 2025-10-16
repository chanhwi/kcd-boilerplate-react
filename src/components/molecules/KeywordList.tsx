import React, { useState } from 'react';
import { IZustandPage, ZustandPageStore } from '../../store/ZustandPageStore';

const KeywordList = () => {
    const [input, setInput] = useState('');
    const { keywordList, addKeyword, removeKeyword } = ZustandPageStore();

    const generateAddKeyword = () => {
        if (input.trim()) {
            const keyObj:IZustandPage = {
                key: Date.now().toString(),
                value: input,
            }

            addKeyword(keyObj);
            setInput('');
        }
    };

    return (
        <div className="todo-list">
            <h3>키워드 목록</h3>
            <div className="todo-input">
                <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="키워드를 입력하세요"
                    onKeyDown={(e) => e.key === 'Enter' && generateAddKeyword()}
                />
                <button onClick={generateAddKeyword}>추가</button>
            </div>
            <ul>
                {keywordList.map(keyword => (
                    <li key={keyword.key} className="todo-item">
                        {keyword.value}
                        <button onClick={() => removeKeyword(keyword.key)} className="delete-btn">
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default KeywordList;