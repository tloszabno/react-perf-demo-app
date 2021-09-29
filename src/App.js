import { useEffect, useState, memo } from "react";

const Menu = () => <span>To jest menu, tego nie pomalujesz</span>;

const Header = ({title}) => (
  <div>
    <h1>{title}</h1>
    <Menu />
  </div>
);

const MemoHeader = memo(Header)

const TodoList = ({ data }) => (
  <ul>
    {data.map((item) => (
      <li key={`item-${item}`}>{item}</li>
    ))}
  </ul>
);

const TodoListWithHeader = ({ data }) => (
  <div>
    <MemoHeader title="Taki tam tytuł"/>
    <TodoList data={data} />
  </div>
);

const App = () => {
  const [data, setData] = useState([1]);
  const interval = 1000;

  useEffect(() => {
    const addData = () => {
      setData((data) => [...data, data[data.length - 1] + 1]);
    };

    const handle = setInterval(addData, interval);
    return () => clearInterval(handle);
  }, []);

  return (
    <div>
      <TodoListWithHeader data={data} />
    </div>
  );
};

export default App;
