import React ,{useEffect} from "react";
import { Button, Container, Form, FormGroup } from "reactstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from "react-toastify";
const btnHandle=()=>{
    //toast("login succesfull");
    toast.success("update successfully",{
      
    });
};
const Contact=()=>{
    useEffect(()=>{
        document.title="Contact us";
    },[])
    return (
        <div>
            <h1 className="text-center">Contact Form</h1>
            <Form style={{margin:"20px"}}>
                <FormGroup>
                <FormGroup>
                    <label for="name">Enter your name :</label><br/>
                    <input
                        type="text"
                        placeholder="Enter name here"
                        id="name"
                        style={{width:"100%"}}
                        />
                </FormGroup>
                    <label for="cno">Contact No : </label><br/>
                    <input 
                    type="number" 
                    placeholder="Enter contact number" 
                    name="cno" 
                    id="cno"
                    style={{width:"100%"}}/>
                </FormGroup>
                
                
                <Container className="text-center">
                    <Button color="success" onClick={btnHandle}>Contact Us</Button>&nbsp;
                    
                </Container>
            </Form>
        </div>
    );
};

export default Contact;