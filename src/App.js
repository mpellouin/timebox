import { Canvas, Tldraw } from '@tldraw/tldraw';
import '@tldraw/tldraw/tldraw.css'
import './App.css'
import { Timebox } from './Timebox';

function App() {

  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <Tldraw>
        <Canvas />
        <Timebox />
      </Tldraw>
    </div>
  );
}

export default App;
