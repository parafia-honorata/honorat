import './App.css';
import Page from './Components/Page'
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Page/>
    </BrowserRouter>
  );
}

export default App;
