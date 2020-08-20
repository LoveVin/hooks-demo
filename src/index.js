import React, { useEffect , useState, useMemo} from 'react';
import ReactDOM from 'react-dom';

function App(){
  const [n, setN] = useState(0)
  const [m, setM] = useState(0)
  const onClickChild = useMemo(()=>{
    return () => {
      console.log(m)
    }
  },[m])  
  return (
    <div>
      我是父组件
      n: {n}
      <button onClick={()=>setN(n+1)}>n+1</button>
      <button onClick={()=>setM(m+1)}>m+1</button>
      <Child value={m} onClick = {onClickChild}/>
    </div>
  )
}

const Child = React.memo((props)=>{
  useEffect(()=>{
    console.log('子组件 render 了')
  })
  return (
    <div>
      我是子组件，我收到来自父组件的值为：m {props.value}
      <br/>
      <button onClick={props.onClick}>click</button>
    </div>
  )
})

ReactDOM.render(<App/>,document.getElementById('root'));

