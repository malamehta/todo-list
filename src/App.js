import React, { useState } from 'react';
import logo from './logo.svg';
// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Plan from './Plan';


function App() {
  const [inputList , setInputList]=useState("");
  const [items , setItems]=useState([]);


  const itemEvent=(event)=>{
         setInputList(event.target.value);
  };
  const listOfItems=()=>{
      setItems((oldItems) => {
          return[...oldItems,inputList];
      });
      setInputList('');  
  };
  const deleteItems=(id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((arrEle,index)=>{
          return index!==id; 
      })
    })
}

  return (
     <div className='container-fluid my-3'>
      <div className='row'>
        <div className='col-sm-6 mx-auto shadow-lg p-1'>
          <h1 className='text-center'>TO-DO-LIST</h1>
          <div className='row '>
            <div className='col-sm-9 '>
              <input type="text" className='form-control' placeholder='Write Plan Here' value={inputList} onChange={itemEvent}/>
            </div>
            <div  className='col-2 btn btn-warning px-5 text-white' onClick={listOfItems}>Add</div>
            <ul className='mx-5 my-3 row'>
              {/* <li className='text-lg'>{inputList}</li> */}
             { items.map((itemval,index)=>{
                return <Plan 
                key={index}
                id={index} 
                text={itemval}
                onSelect={deleteItems}  
                />
              })
             }
            </ul>
          </div>
        </div>
      </div>
     </div>
  );
}

export default App;
