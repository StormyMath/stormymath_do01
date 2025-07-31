function Sketch() {
  React.useEffect(() => {
    let sketch = (p) => {
      p.setup = () => {
        p.createCanvas(400, 200);
        p.background(240);
      };
      p.draw = () => {
        p.fill(50);
        p.ellipse(p.mouseX, p.mouseY, 20, 20);
      };
    };
    new p5(sketch, document.getElementById('sketch-container'));
  }, []);

  return <div id="sketch-container"></div>;
}

function App() {
  return (
    <div>
      <h1>React-CDN + p5.js Sample</h1>
      <Sketch />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
