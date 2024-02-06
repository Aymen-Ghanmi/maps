import React from 'react';
import Navb from './Navb';
const App = () => {
  return (
    
    <div>
      <Navb />
      <header style={{display:'flex',justifyContent:'space-between'}}>
        <div><h1>Hello Gomycoders !!!</h1>
        <h3>GOMYCODE, the leading education technology start-up in Africa and the Middle East</h3></div>
        <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.9496301082145!2d10.16694107470036!3d36.84368236524902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd359f19cff1a1%3A0x71a7d4d04a5b1ef2!2sGOMYCODE%20Menzah%205!5e0!3m2!1sen!2stn!4v1707228276501!5m2!1sen!2stn" width="600" height="450" style={{border:"0 "}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>
      </div>
      </header>
    </div>
  )
}

export default App