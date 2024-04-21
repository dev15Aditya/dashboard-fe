import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import HighLight from './components/HighLights/HighLight';
import Sidebar from './components/Sidebar/sidebar';

function App() {
  return (
    <div className="min-h-[100vh] flex">
      <Sidebar />

      <div
        className="flex flex-wrap w-full"
        style={{ width: 'calc(100% - 60px)' }}
      >
        <div className="w-full lg:w-3/4">
          <Dashboard />
        </div>
        <div className="w-full lg:w-1/4">
          <HighLight />
        </div>
      </div>
    </div>
  );
}

export default App;
