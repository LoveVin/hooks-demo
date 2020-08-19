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
  const [x, setX] = useState(0)
  useEffect(()=>{
    console.log('只在第一次 render 后执行')
  },[])
  useEffect(()=>{
    console.log('每次 render 后都执行，包括第一次 render')
    return ()=>{
      console.log('该组件要被销毁了')
    }
  })
  useEffect(()=>{
    console.log('只在 x 改变后执行，包括第一次 x 从 undefined 变成 initialValue')
  },[x])
  return (
    <div>
      我是 App
      {state.n}
      <button onClick={()=>dispatch({type: 'addOne'})}>+1</button>
      <button onClick={()=>dispatch({type: 'addTwo'})}>+2</button>
      <button onClick={()=>dispatch({type: 'addX', x: 5})}>+5</button>
      <br/>
      x: {x}
      <button onClick={()=>setX(x+1)}>x+1</button>
    </div>
  )
}


ReactDOM.render(<App/>,document.getElementById('root'));

