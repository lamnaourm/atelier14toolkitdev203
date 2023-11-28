import './App.css';
import ActionsTasks from './components/ActionsTasks';
import AddTask from './components/AddTask';
import ListTasks from './components/ListTasks';
import StatsTasks from './components/StatsTasks';

function App() {
  return (
    <div className="container">
      <div className='content'>
        <AddTask />
      <ListTasks />
      <StatsTasks />
      <ActionsTasks />
      </div>
    </div>
  );
}

export default App;
