import React, { useState, createContext, useContext } from 'react';
import ReactDOM from 'react-dom';

const Context = createContext(null)

function App(){
  const [n, setN] = useState(0)
  return (
    <Context.Provider value={{n, setN}}>
      <div>
          <Baba />
          <Uncle />
      </div>
    </Context.Provider>
  )
}

function Baba(){
  return (
    <div>
      我是爸爸
      <Child />
    </div>
  )
}

function Uncle(){
  const {n, setN} = useContext(Context)
  return (
    <div>
      我是叔叔
      我拿到的 context 数据为 {n}
    </div>
  )
}

function Child(){
  const {n, setN} = useContext(Context)
  return (
    <div>
      我是儿子
      我拿到的 context 数据为 {n}
      <button onClick={() => setN(n+5)}>
        点击改变 context 数据
      </button>
    </div>
  )
}


ReactDOM.render(<App/>,document.getElementById('root'));

