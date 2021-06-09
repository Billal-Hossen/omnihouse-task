import React from 'react';

const Header = () => {
    return (
        <div >
      <div className='py-2  ' style={{background:"#211F21"}}>
      <div className='container d-flex justify-content-end '>
       
 
          <div className='d-flex align-items-center text-white'>
           
            <button className='btn btn-sm ms-2 btn-outline-dark p-1' style={{background:"#93227F",color:"white",borderRadius:20}}> <span className="p-2">Login</span> </button>
            <button  className="btn  ms-2 btn-sm" style={{color:"white"}}>Sign up</button>

           
          </div>
 
      </div>
    </div>
        </div>
    );
};

export default Header;