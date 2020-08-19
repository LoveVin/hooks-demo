import React, { useReducer , useEffect , useState, useRef} from 'react';
import ReactDOM from 'react-dom';

const initialState = {
  n: 0
}

const reducer = (state, action) => {
  switch(action.type){
    case 'addOne':
      return { n: state.n + 1 }
    case 'addTwo':
      return { n: state.n + 2 }
    case 'addX':
      return { n: state.n + action.x }
    default: {
      throw new Error('unknown type')
    }
  }
}

function App(){
  const [state, dispatch] = useReducer(reducer, initialState)
  const count = useRef(0)
  useEffect(()=>{
    count.current++;
    console.log(`这是第 ${count.current} 次渲染页面`)
  })
  return (
    <div>
      我是 App
      {state.n}
      <button onClick={()=>dispatch({type: 'addOne'})}>+1</button>
      <button onClick={()=>dispatch({type: 'addTwo'})}>+2</button>
      <button onClick={()=>dispatch({type: 'addX', x: 5})}>+5</button>
    </div>
  )
}


ReactDOM.render(<App/>,document.getElementById('root'));

