import { useEffect, useState } from "react";

const Menu = () => <span>To jest menu, tego nie pomalujesz</span>;

const Header = () => (
  <div>
    <h1>Taki tam tytuł</h1>
    <Menu />
  </div>
);

const TodoList = ({ data }) => (
  <ul>
    {data.map((item) => (
      <li key={`item-${item}`}>{item}</li>
    ))}
  </ul>
);

const TodoListContainer = () => {
  const [data, setData] = useState([1]);
  const interval = 1000;

  useEffect(() => {
    const addData = () => {
      setData((data) => [...data, data[data.length - 1] + 1]);
    };

    const handle = setInterval(addData, interval);
    return () => clearInterval(handle);
  }, []);

  return <TodoList data={data}/>
}


const TodoListWithHeader = () => (
  <div>
    <Header />
    <TodoListContainer/>
  </div>
);

const App = () => {
  return (
    <div>
      <TodoListWithHeader/>
    </div>
  );
};

export default App;
