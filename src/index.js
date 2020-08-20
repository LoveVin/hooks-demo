import React, { useEffect , forwardRef, useRef, useImperativeHandle} from 'react';
import ReactDOM from 'react-dom';

function App(){
  const myRef = useRef(null)
  useEffect(()=>{
    console.log(myRef.current.real)
    console.log(myRef.current.getParent())
  }, [])
  return (
    <div>
      我是父组件
      <Child ref={myRef}/>
    </div>
  )
}

const Child = forwardRef((props, ref)=>{
  const childRef = useRef(null)
  useImperativeHandle(ref, ()=>{
    return {
      real: childRef.current,
      getParent(){
        return childRef.current.parentNode
      }
    }
  })
  return (
    <div>
      我是子组件，我有一个子DOM
      <button ref={childRef}>按钮</button>
    </div>
  )
})

ReactDOM.render(<App/>,document.getElementById('root'));

