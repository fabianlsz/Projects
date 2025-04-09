import './App.css';
import ChatBox from './components/ChatBox';
import Result from './components/result';
import { GlobalProvider } from './states/GlobalState';
import React, { useState } from 'react';
import IfcViewer from './components/result/IfcViewer.jsx'; // Import the IfcViewer component

function App() {
  const [ifcFile, setIfcFile] = useState(null);
  const [resultKey, setResultKey] = useState(0);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.name.endsWith('.ifc')) {
      setIfcFile(file);
    } else {
      alert('Please select a valid .ifc file');
    }
  };

  const resetResult = () => {
    setResultKey(prevKey => prevKey + 1);
  };

  return (
      <GlobalProvider>
        <div className="flex h-screen p-6 bg-gradient-to-b from-sky-900/80 to-slate-950/100">
          <div className="h-full w-1/3 pr-4 bg-transparent">
            <ChatBox />
          </div>
          <div className="h-full w-2/3 bg-transparent relative">
            {/* File upload */}
            <Result key={resultKey} />
            <div className="bg-transparent">
              <input
                  type="file"
                  accept=".ifc"
                  onChange={handleFileChange}
                  className="hidden"
              />
            </div>
                 {/*nothing breaks here if we comment this out, tho we should solve it later*/}
            {/* Reset Button */}
            <button
                onClick={resetResult}
                className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded"
            >
              Reset
            </button>

            {/* IfcViewer Component */}
            {ifcFile && <IfcViewer file={ifcFile} />}
          </div>
        </div>
      </GlobalProvider>
  );
}

export default App;