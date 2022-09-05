import React from 'react'


export default function Plan(props) {
   
  return (
    <>
    <li className='col-sm-9 '>{props.text}</li><button className='btn btn-danger col-sm-1 mb-2' onClick={()=>{
        props.onSelect(props.id);
    }}>X</button>
        
        
    </>
  )
}
