import { ColorProvider } from "./contexts/ColorContext";
import Pallate from "./Pallate";

function App() {
  return (
    <div className="App">
      <ColorProvider>
        <Pallate />
      </ColorProvider>
    </div>
  );
}

export default App;
