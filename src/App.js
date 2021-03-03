import './App.css';
import Page from './Components/Page'
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Page/>
    </HashRouter>
  );
}

export default App;
