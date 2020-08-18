import React from 'react';
import ReactDOM from 'react-dom';

let _state

function myUseState(initialValue){
  if(_state === undefined){
    _state = initialValue
  }
  const setState = (newValue)=>{
    _state = newValue
    render()
  }
  return [_state, setState]
}

function render(){
  ReactDOM.render(<App/>,document.getElementById('root'));
}

function App(){
  const [n, setN] = myUseState(0)
  return (
    <div>
      n: {n}
      <button onClick={() => setN(n+1)}>+1</button>
    </div>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'));

