import React,{useContext} from 'react';
import DropDownContext from '../context/DropDownContext';

const DropDown = () => {

    const {dropDown} = useContext(DropDownContext)
  return <div className={dropDown?"dropDown":"hide"}>
      <div className=' d-flex align-items-center' style={{height:'100vh'}}>
         
          <div className='text-center fs-2 ' style={{width:'100%'}}>
                <div className='pb-3'>
                        <a className='dropDownLink' href="">About</a>
                </div>
                <div className='pb-3'>
                        <a className='dropDownLink' href="">Services</a>
                </div>
                <div className='pb-3'>
                        <a className='dropDownLink' href="" >Tools</a>
                </div>
                <div className='pb-3'>
                    <a className='dropDownLink' href="">Projects</a>
                </div>
          </div>
       
      </div>
  </div>;
};

export default DropDown;
