import React, { useState } from 'react';

const Counter = () => {
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

export default Counter;