function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (window.MathJax && window.MathJax.typeset) {
      window.MathJax.typeset();
    }
  }, []);

  React.useEffect(() => {
    if (window.MathJax && window.MathJax.typeset) {
      window.MathJax.typeset();
    }
  }, [count]);

  return (
    <div>
      <h1>React-CDN + MathJax Sample (Full)</h1>
      <p>上の数式: <span>{"$y = ax^2 + bx + c$"}</span></p>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <div className="box">
        <p>中の数式: <span>{"$\\frac{dy}{dx} = 2ax + b$"}</span></p>
      </div>
      <p>下の数式: <span>{"$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$"}</span></p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
