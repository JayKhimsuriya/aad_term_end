import React from "react";
import AddEditForm from "./AddEditForm";

const Popup =(props) =>{
    
    if (!props.isOpen) {
    return null;
  }

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>{props.title}</h2>
        <p>{props.d1}</p>
        <p>{props.d2}</p>
        <p>{props.d3}</p>
        <p>{props.d4}</p>


        <AddEditForm 
        
        
        d1={props.d1}
        d2={props.d3}
        d3={props.d2}
        d4={props.d4}
        id={props.d5}
        
        
        
        />
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
}

export default Popup;