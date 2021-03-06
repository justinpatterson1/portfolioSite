import '../assets/css/App.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero'
import react,{useContext,useState} from 'react'
import DropDownContext from '../context/DropDownContext';
import DropDown from '../components/DropDown';
import AboutMe from '../components/AboutMe';

function App() {

  const [dropDown,setDropDown] = useState(false)
  


  return (
    <DropDownContext.Provider value={{dropDown,setDropDown}}>
    <div className="App">
      <div>
          <Navbar/>
           <Hero/>
           <AboutMe/>
        
          
      </div>
     
    </div>
    </DropDownContext.Provider>
  );
}

export default App;
