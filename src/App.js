
import {  Routes, Route } from 'react-router-dom';
import './App.css';
import LinksContexProvider from './context/LinksContex';
import CreateTree from './components/CreateTree';
import Home from './components/Home';
import UniqueLink from './components/UniqueLink';


function App() {
  
  return (
    <div className="body-bg">
      <LinksContexProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreateTree/>} />
        <Route path='/uniquelink/:id' element={<UniqueLink />} />
        <Route
           path="*"
           element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
         />
      </Routes>
      </LinksContexProvider>
    </div>
  );
}

export default App;
