import React from 'react'

export default function Maincontent(props) {
  return (
    <div>
     <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" style={{backgroundColor: props.Dark === "dark"? "grey":"white"}} placeholder="name@example.com"/>
     </div>
        
     <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" style={{backgroundColor: props.Dark === "dark"? "grey":"white"}} id="exampleFormControlTextarea1" rows="3"></textarea>
     </div>

     
    </div>
  )
}
