function Sketch() {
  React.useEffect(() => {
    // p5.jsの初期化
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(400, 200);
        p.background(240);
      };
      p.draw = () => {
        p.fill(50);
        p.ellipse(p.mouseX, p.mouseY, 20, 20);
      };
    };
    new p5(sketch, document.getElementById("sketch-holder"));

    // MathJaxの再レンダリング（重要）
    if (window.MathJax && window.MathJax.typeset) {
      window.MathJax.typeset();
    }
  }, []);

  return (
    <div>
      <p>上の数式: <span>{"$y = ax^2 + bx + c$"}</span></p>
      <div id="sketch-holder"></div>
      <p>下の数式: <span>{"$\\frac{dy}{dx} = 2ax + b$"}</span></p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>React-CDN + p5.js + MathJax Sample</h1>
      <Sketch />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
