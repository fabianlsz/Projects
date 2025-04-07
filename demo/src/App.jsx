import './App.css';
import ChatBox from './components/ChatBox';
import Result from './components/Result';
import { GlobalProvider } from './states/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="flex h-screen p-6 bg-linear-to-b from-sky-900/80 to-slate-950/100">
        <div className="h-full w-1/3 pr-4">
          <ChatBox />
        </div>
        <div className="h-full w-2/3">
          <Result />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;