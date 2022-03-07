import React from 'react'
import loading from '../loading.gif'
import loading2 from '../loading2.gif'

function Spinner(props){
  if (props.mode==="light") {
    return (
      <div className='text-center'>
          <img src={loading} alt="Loading..."/>
      </div>
    )
  }
  else{
    return (
      <div className='text-center font'>
          <img src={loading2} alt="Loading..."/>
      </div>
    )
  }
   
}
export default Spinner
 