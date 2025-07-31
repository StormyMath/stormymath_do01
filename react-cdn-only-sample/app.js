function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>React-CDN Only Sample</h1>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <div className="box">
        <p>これは状態管理のサンプルです。</p>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
