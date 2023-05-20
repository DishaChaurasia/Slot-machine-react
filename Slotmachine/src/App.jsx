import React from 'react';
import SlotM from './Slotm';


const App=()=>{
 return (
 <>
  <h1 className="heading_style" > 🎰 Welcome to
  <span style={{fontWeight:'bold'}}  > Slot Machine Game </span> 🎰
  </h1>
  <div className="heading_style">
   <SlotM x='😄' y='😄' z='😄' />
  <br/>
   <SlotM x='👍' y=' 👎 '  z=' 👍 ' />
   <br/>
   <SlotM  x=' 🌲 '  y=' 🌴 '  z=' 🌳 ' />
   <br/>
   <SlotM  x=' 🥭 ' y=' 🥭 ' z=' 🥭 ' />

   </div>
 </>
 );
};

export default App;
