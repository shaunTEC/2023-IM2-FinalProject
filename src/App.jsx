import 'bootstrap/dist/css/bootstrap.min.css';
//css
import './App.css';
//components
import Navbar from './components/navbar';
import Banner from './components/Banner';



function App() {
  return (  
    <>
      <Navbar />
      <Banner />
      <h1>
        Hello World
      </h1>
    </>
  );
}

export default App;
