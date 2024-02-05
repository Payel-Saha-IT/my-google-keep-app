import React, {useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote=(props)=>{

    const [expand,setExpand]=useState(false);
    const ExpandIt=()=>{
        setExpand(true);
    }
    const CloseExpand=()=>{
        setExpand(false);
    }
    const [note,setNote]=useState(
        {
            title:"",
            content:""
        }
    );

    const InputEvent=(event)=>{
        // const value=event.target.value;
        // const name=event.target.value;

            const {name,value}=event.target;
        setNote((prevData)=>{
                return {
                    ...prevData,event,
                    [name]:value

                }
        });
    }

    const AddEvent=()=>{
            props.passNote(note);
            setNote(
               { 
                title:"",
                content:""
                }
            );
    }

return(
    <>
    <div className='main_note' onDoubleClick={CloseExpand}>
        <form>
           { expand?<input type='text' name='title' onChange={InputEvent} placeholder='Title' value={note.title}></input>:null}
            <textarea rows='' name='content' column='' onChange={InputEvent} placeholder='Write a note...' autoComplete='off' value={note.content} onClick={ExpandIt} >
            </textarea>

           {expand?<Button onClick={AddEvent}>
                <AddIcon className='plus-sign'/>
            </Button>:null}
        </form>
    </div>
    
        
    </>
);
}

export default CreateNote;