import './App.css';
import Navbar from './components/Navbar';
import Aside from './components/aside';
import Section from './components/section';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section />
      <Aside />
    </div>
  );
}

export default App;
