import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import SearchTodo from './components/SearchTodo';
import DeleteTodo from './components/DeleteTodo';

function App() {
  return (
    <div>
      <AddTodo/>
      <SearchTodo/>
      <DeleteTodo/>
    </div>
  );
}

export default App;
