import './assets/layout.css';
import { Portrait } from './components/Portrait';
import { LeftAside } from './components/LeftAside';
import { Main, MainHeader } from './components/Main';

function App() {
  return (
    <>
    <div className="layout">
      <Portrait />
      <MainHeader />
    </div>
    <div className="layout">
      <LeftAside />
      <Main />
    </div>
    </>
  );
}

export default App;
