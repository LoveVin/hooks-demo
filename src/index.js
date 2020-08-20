import React, { useEffect , useState} from 'react';
import ReactDOM from 'react-dom';

const useList = () => {
  const [list, setList] = useState(null);
  useEffect(() => {
    ajax("/list").then(list => {
      setList(list);
    });
  }, []); // [] 确保只在第一次运行
  return {
    list: list,
    setList: setList
  };
};
export default useList;

function ajax() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Frank" },
        { id: 2, name: "Jack" },
        { id: 3, name: "Alice" },
        { id: 4, name: "Bob" }
      ]);
    }, 2000);
  });
}

function App() {
  const { list, setList } = useList();
  return (
    <div className="App">
      <h1>List</h1>
      {list ? (
        <ol>
          {list.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ol>
      ) : (
        "加载中..."
      )}
    </div>
  );
}

ReactDOM.render(<App/>,document.getElementById('root'));

