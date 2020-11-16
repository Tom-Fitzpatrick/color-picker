import "./App.css";
import "./Palette.js";
import Palette from "./Palette";
import seedColors from "./seedColors";

function App() {
  return (
    <div>
      <Palette {...seedColors[4]} />
    </div>
  );
}

export default App;
