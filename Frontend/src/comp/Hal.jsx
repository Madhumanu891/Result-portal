import axios from 'axios'
import React, { useState } from 'react'

const Hal = () => {
    let [opt,setopt]=useState("")
    let [val,setVal]=useState("")
    let [data,setData]=useState("")
    let fun=(e)=>setopt(e.target.value)
    let fun1=(e)=>setVal(e.target.value)
    let gethal=()=>{
        axios.get(`https://result-portal-api.vercel.app/hal/${opt}/${val}`).then((res)=>{
            setData(res.data)
         
        })
    }
  return (
    <div className='halcon'>
       <div className="container">
       <div className="halradio">
            <div>
            <input type='radio' className='regradio' name="opt" value="phno" onChange={fun}/>Phone Number

            </div>
            <div>
            <input type='radio' className='regradio' name="opt" value="email" onChange={fun}/>E-mail
                   
            </div>
          </div>
       <div>
        </div>   
        <input type='text' onChange={fun1} />
        <button onClick={gethal}>Get HAL</button>
        {data!==""&&data.length==0&&<div>Check details</div>}
       {data!=""&&data.length>0&& <div className='hcard'>

            <img src={`https://result-portal-api.vercel.app/pic/${data[0].photo}`}/>
            <p>HALLNO:{data[0]._id}</p>
            <p>Name:{data[0].name}</p>
        </div>}

       </div>
    </div>
  )
}

export default Hal
