import logo from './logo.svg';
import './App.css';
import Routes from './Routes/Routes';
import { RouterProvider } from 'react-router-dom';


function App() {
  return (
    <div className="app">
    <RouterProvider router ={Routes}></RouterProvider>
    </div>
  );
}

export default App;
