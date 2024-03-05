import './App.css';
import Gallery from './pages/UI/MyFirstComponent';
import TodoList from './pages/UI/JSXCase';
import WithCurlyBraces, { DoubleCurlies } from './pages/UI/WithCurlyBraces';
import Profile, {Profile2} from './pages/UI/PassingProps';
import PackingList from './pages/UI/ConditionalRendering';
import RenderingList from './pages/UI/RenderingLists';

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
      <br />
      <h1>Passing JSX as children</h1>
      <Profile2 />
      <br />
      <h1>Conditional rendering with :?</h1>
      <PackingList />
      <br />
      <h1>Rendering Lists</h1>
      <RenderingList />
    </div>
  );
}

export default App;
