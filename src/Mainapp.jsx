import React from 'react'
import './mainapp.css'
import { useState } from 'react';
import {MdDelete} from 'react-icons/md';
import {MdOutlineAddTask} from 'react-icons/md';
import { MdOutlineAddCircle } from "react-icons/md";

const Mainapp = () => {
    const[input,setInput]=useState("");
    const [inputlist,setInputlist] =useState([]);

    const handleinput=(e)=>{
        let x =e.target.value;
        setInput(e.target.value);
        
    }
    const handleAdd=()=>{
        setInputlist([...inputlist,input]);
        setInput("");
    }
    const handledelete=(id)=>{
        const newarr = inputlist.filter((val,idx)=>{
            return id!=idx &&val;
        });
        setInputlist(newarr);
    }
  return (
    <>
    <div className="app">
        <h2>Tasks List</h2>
        <div className="container">
            <div className="input-box">
                <input type='text' className='input-bar' placeholder="Enter task" value={input} onChange={(e)=>{handleinput(e)}}/>
                <button onClick={handleAdd} className='add_btn'><MdOutlineAddCircle  color='#5f33e1' size="40px"/></button>
            </div>
            <div className="list">
                <ul className='list-type'>
                {inputlist.map((item,i)=>
                    <li key={i}  className='list-item'>{item} 
                    <button className='del' onClick={()=>{handledelete(i)}}><MdDelete color='red' size="20px"/></button>
                    </li>
                )}
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Mainapp