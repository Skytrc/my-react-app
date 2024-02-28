import './App.css';
import Gallery from './pages/MyFirstComponent';
import TodoList from './pages/JSXCase';
import WithCurlyBraces, { DoubleCurlies } from './pages/WithCurlyBraces';
import Profile from './pages/PassingProps';

function App() {
  return (
    <div className="App">
      <h1>My first component</h1>
      <Gallery />
      <br />
      <h1>JSX Sample</h1>
      <TodoList/>
      <br />
      <h1>Use Curly Braces</h1>
      <WithCurlyBraces />
      <br />
      <h1>Use double curlis in CSS</h1>
      <DoubleCurlies />
      <br />
      <h1>Passing props to component</h1>
      <Profile />
    </div>
  );
}

export default App;
