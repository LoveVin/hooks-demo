import React from 'react';
import ReactDOM from 'react-dom';

let _state = []
let index = 0

function myUseState(initialValue){
  const currentIndex = index
  if(_state[currentIndex] === undefined){
    _state[currentIndex] = initialValue
  }
  const setState = (newValue)=>{
    _state[currentIndex] = newValue
    render()
  }
  index++
  return [_state[currentIndex], setState]
}

function render(){
  index = 0
  ReactDOM.render(<App/>,document.getElementById('root'));
}

function App(){
  const [n, setN] = myUseState(0)
  const [m, setM] = myUseState(0)
  return (
    <div>
      n: {n}
      <button onClick={() => setN(n+1)}>+1</button>
      <br/>
      m: {m}
      <button onClick={() => setM(m+1)}>+1</button>
    </div>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'));

