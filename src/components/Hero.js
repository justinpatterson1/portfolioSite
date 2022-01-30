import React,{useContext} from 'react'
import DropDown from '../components/DropDown'
import programmer from '../assets/images/computerGuy.svg'
import DropDownContext from '../context/DropDownContext'

const Hero = () => {

    const {dropDown}= useContext(DropDownContext)
    return (
        <div className='hero'>
        <DropDown/>
        <div className={dropDown ?'hide':'container'}>
               <div style={{height:'100vh'}} className='  align-items-center'>
                <div className=' row ' style={{height:'100%'}}>
                
                    <div className='col align-items-center row'>
                       
                        <div className='col-sm-4  col-lg-8 order-1 order-sm-2'>
                            <p className='text-muted fs-6 mb-6' style={{letterSpacing:'20px'}}>INTRO</p>
                                
                                <div className='text-white fs-1 py-6' style={{padding:'20px 0px'}}>
                                    <h1>

                                        Welcome!

                                    </h1>
                                    <h2>
                                        My Name is Justin
                                    </h2>
                                </div>
                                <p className='text-wrap text-muted pe-auto'>
                                    I am a software Engineer from a beautiful island called Trinidad and Tobago.
                                    Lets make your ideas come to life together.
                                </p>
                        </div>
                          
                    </div>
                    <div className='col-lg-7 col-sm-4 order-2 order-sm-1 align-items-center row'>
                        <img src={programmer} alt="programmer" srcset="" style={{width:'75%'}} className='col img-fluid' />
                    </div>

                </div>
             </div>
        </div>
        </div>
     
    )
}

export default Hero
