import React from 'react';
import aboutMe from '../assets/images/aboutme.png'
import reliable from '../assets/images/reliability.png'
import dependable from '../assets/images/dependable.png'
import medal from '../assets/images/medal.png'

const AboutMe = () => {
  return (
  <div className='mx-4'>
      <div className='card'>
        <div className='card-body'>
              <div className='row align-items-center'>
                  
                <div className='col'>
                    <img className='img-fluid' src={aboutMe} />
                </div>
                <div className='col px-5'>
                <p className='has-text-info is-size-5 text-primary' style={{letterSpacing:'10px'}}>
                           About Me
                       </p>
                       <h1 className='title fs-1 mt-5 text-secondary mb-6'>
                           Hello, I'm <br/>Justin Patterson
                       </h1>
                       <p className='subtitle'>
                           I work as an  Information System Support Analyst in Trinidad and Tobago. 
                       </p>
                       <p >
                           I have an intense passion for software development and IT. I am an all rounded developer, however
                           I have a keen interest in backend and front-end development. 
                       </p>
                       <p>
                           I would love to make your ideas a reality
                       </p>
                </div>
            </div>  
            <div>
                <p className='text-center fs-2 pb-3'>
                    What To Expect From Working With Me?
                </p>
                <div className='row justify-content-center'>

                    <div className='col text-center'>
                      
                        <img src={reliable} alt="" srcset="" style={{height:'200px'}}/>
                        <p className='text-center my-3 fs-3'>Reliability</p>
                        
                    </div>
                    <div className='col text-center'>
                       
                         <img src={dependable} alt="" srcset="" style={{height:'200px'}}/>
                         <p className='text-center my-3 fs-3'> Dependability</p>
                         
                    </div>
                    <div className='col text-center'>
                         
                         <img src={medal} alt="" srcset="" style={{height:'200px'}}/>
                         <p className='text-center my-3 fs-3'>Quality</p>
                         
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>
  );
}

export default AboutMe;
