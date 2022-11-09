import React,{useState} from 'react'
import { Button,Form } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {v4 as uuid} from "uuid";
import {useNavigate } from "react-router-dom";
const Add = () => {
    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const navigate = useNavigate();
  return (
    <div>
        <Form  className = "d-grid gap-2" style={{margin:"10rem"}}>
            <Form.Group className='mb-3' controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" required value={name} onChange={(e)=>setName(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formAge">
                <Form.Label>Age</Form.Label>
                <Form.Control type="text" placeholder="Enter Age" value={age} onChange={(e)=>setAge(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={()=>{
                Employees.push({id:uuid(),name:name,age:age});
                navigate("/");
            }}>
                Submit
            </Button>
        </Form>


    </div>
  )
}

export default Add