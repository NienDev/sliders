import React, { useState, useEffect } from 'react';
import Card from './Card'
import data from './data';
function App() {
  const [order, setOrder] = useState(0)
  
  useEffect(() => {
    const slider = setInterval(() =>{
      setOrder(order => order == 0 ? 3 : order - 1)
    },2000)
    return () => clearInterval(slider)
  },[order])

  function handleClick(e){
    
    if (e.target.id == "left") 
    {
      setOrder(order => order == 0 ? 3 : order - 1)
    
    }
    else{
      setOrder(order => order == 3 ? 0 : order + 1)
    }
  }

  return (
    <div className='text-center max-w-3xl mx-4 lg:mx-auto my-16 relative flex flex-col '>
      <h2 className="font-semibold mb-12 head"><span className="text-primary">/</span> Reviews</h2>
      <button className="z-10" onClick={(e)=>handleClick(e)}>
        <i id="left" className="ico fa-solid fa-angle-left"></i>
      </button>
      <button className="z-10" onClick={(e)=>handleClick(e)}>
        <i id="right" className="ico fa-solid fa-angle-right"></i>
      </button>

    
      <div className="relative slides" >
        {data.map(item => <Card  order={order} key={item.id} id={item.id} data={item} handleClick={handleClick}/>)}
      </div>
    </div>
  );
}

export default App;
