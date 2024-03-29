import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const Note=(props)=>{
    const DeleteNote=()=>{
        props.deleteItem(props.id);
    }
return(
    <>
    
    <div className='note'>
        <h1>{props.title}</h1>
        <br/>
        <p>{props.content}</p>
        <button className='btn' onClick={DeleteNote}>
        <DeleteIcon className='deleteIcon'></DeleteIcon>
        </button>
        
   
    </div>
    
    
        
    </>
);
}

export default Note;