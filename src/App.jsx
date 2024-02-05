import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
const App=()=>{
    const [addItem,setAddItem]=useState([]);
    const addNote=(note)=>{
        setAddItem((prevData)=>{
                return [...prevData,note];
        });
    }

    const Deletion=(id)=>{
        setAddItem(
           (prevData)=>{
            return prevData.filter((value,index)=>{
                return index!==id;
            })
           }
        )

    }
return (<>
<div className='main-div'>
<Header/>
<CreateNote passNote={addNote}/>
<div className='keep_note'>
{addItem.map((val,index)=>{
    return <Note key={index} id={index} title={val.title} content={val.content} deleteItem={Deletion}/>;
})}
</div>
</div>
<Footer/>

</>);
}

export default App;