import './App.css';
import {Routes, Route} from 'react-router-dom'
import Post from './Components/Post';
import Createpost from './Components/Createpost';

function App() {
  return (
    <div className='App'>
       <Routes>
       
        <Route path="/" element={<Post />} />
        <Route path="/Createpost" element={<Createpost/>} />
        
       </Routes>
    </div>
  );
}

export default App;
