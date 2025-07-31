  // MathJaxの再レンダリング（重要）
  if (window.MathJax && window.MathJax.typeset) {
    window.MathJax.typeset();
  }

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>React-CDN Only + MathJax Sample</h1>
      <p>上の数式: <span>{"$y = ax^2 + bx + c$"}</span></p>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <div className="box">
        <p>これは状態管理のサンプルです。</p>
      </div>
      <p>下の数式: <span>{"$\\frac{dy}{dx} = 2ax + b$"}</span></p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
