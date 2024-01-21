import './App.css';
import ComponentMenu from './BuildingComponents/ComponentMenu';
import Navbar from './Header/Navbar';
import InputShape from './InputBox/InputShape';
import Footer from './Footer/Footer';


function App() {
  return (
    <>
    <Navbar sticky="top" />
    <br />
    <ComponentMenu/>
    <br /><br />
      <InputShape />
      <br /><br />
      <Footer />
      
    </>
  );
}

export default App;
