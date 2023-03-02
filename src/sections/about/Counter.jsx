import React, { useState, useEffect } from 'react';
import './NumerAnimation.css';

function Counter({ number, text }) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            if (count < number) {
                setCount(count + 1);
            }
        }, 50);
        return () => clearInterval(interval);
    }, [count]);
    return (

        <div className='flex-col gap-10 ' >
            <p className='text-[#ff9800] text-4xl font-bold'>{count}</p>
            <p className='text-sm font-medium'>{text}</p>
        </div>
    )
}
export default Counter
