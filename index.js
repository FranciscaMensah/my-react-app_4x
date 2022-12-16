import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function App(){
    const [result, setResult] = React.useState('YES');
    const [num, setNum] = React.useState(0);

    function handleClick (){
        setResult('NO');

        setTimeout(()=>{
            setResult('YES AGAIN')
        }, 2000)
    }

    function handleIncrement (){
        setNum(num + 1);
    }

    function handleDecrement (){
        num > 0 ? setNum(num - 1) : setNum(num);
    }

    return(
        <div className='box'>
            <h1 className='box-title'>Project 4 - React States</h1>
            <h1 className='box-subtitle'>Click the button below to change the text</h1>
            <h2 className='display-box'>{result}</h2>
            <h2 
                className='btn'
                onClick={handleClick}>CLICK ME</h2>
            <br/>
            <br/>
            <hr/>
            <h1 className='box-title'>Project 4b</h1>
            <div className='box-2'>
                <div className='display-box-2'>{num}</div>
                <br/>
                <button
                    onClick={handleDecrement} 
                    className='btn btn-minus'>-</button> 
                <button
                    onClick={handleIncrement} 
                    className='btn btn-add'>+</button>
            </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));