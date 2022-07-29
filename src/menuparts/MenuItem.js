import React from 'react'
import '../style/menu.css'
function MenuItem(props){
    return(
        <div className='menuItem'>
           
            <div style={{ backgroundImage: `url(${props.image})` }}> </div>
            <h1> {props.name} </h1>
      <p> {props.categre} </p>
        </div>
        
    )
    
}
export default MenuItem