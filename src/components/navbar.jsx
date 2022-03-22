import React, { useState } from 'react'

function Navbar() {

  const [ state, setState ] = useState(true)

  function toggle() {
    setState(!state)
  }

  return (
    <nav className={`${!state ? "flex flex-col space-y-5 items-center" : "" }flex items-center lg:self-center justify-between mx-3 lg:w-3/4 pt-3 pb-3 sticky top-0 bg-body z-10`}>
        <a href="#home"><p className={` font-baloo2 text-text font-bold text-2xl p-2 mx-5`}>Manideep.paul</p></a>
      <div className={`${state ? "hidden" : "flex flex-col space-y-5 items-center"} md:flex text-text mx-5 text-lg font-semibold md:space-x-16`}>
          <a href="#home"><p className=" pt-2 hover:text-text-secondary">Home</p></a>
          <a href="#projects"><p className=" pt-2 hover:text-text-secondary">Projects</p></a>
          <a href="#contactMe"><p className="hover:bg-backcolor hover:text-text-secondary border-2 font-bold border-backcolor px-6 py-2 rounded-lg">Contact Me</p></a>
      </div>
      <div onClick={toggle} className="md:hidden mx-5">
        {(!state) && (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M4 18L18 4l2 2L6 20z"></path><path fill="white" d="M6 4l14 14-2 2L4 6z"></path></svg>) || (<svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="white"></path></svg>)}
      
      
      </div>
    </nav>
  );
}

export default Navbar