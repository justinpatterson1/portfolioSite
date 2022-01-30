import React,{useContext} from 'react';
import {FaBars} from 'react-icons/fa'
import DropDown from '../components/DropDown';
import DropDownContext from '../context/DropDownContext';


const Navbar = () => {

  const {dropDown,setDropDown} = useContext(DropDownContext)
  return (
  <div>

      <div className='container'>

          <nav className='navbar'>
          


            <div>
                  <h1>
                      Justin Patterson
                  </h1>
              </div>
              <FaBars className='bar'onClick={()=>{setDropDown(!dropDown)}}/>
             
              <div className='hide-menu'>
                  <ul className=''>
                    <li className='nav-item'>
                    <a href="" className='link dropDownLink'>About</a>
                        
                    </li>
                    <li className='nav-item'>
                    <a href="" className='link dropDownLink'>Services</a>
                    </li>
                    <li className='nav-item'>
                      <a href="" className='link dropDownLink'>Tools</a>
                    </li>
                    <li className='nav-item'>
                      <a href="" className='link dropDownLink'>Projects</a>
                    </li>
                  </ul>
              </div>
              <div className='hide-menu'>
                <button className='btn btn-outline'>
                    Sign Up
                </button>
              </div>
            
              

            </nav>
        </div>
        </div>
       


  


);
};

export default Navbar;
