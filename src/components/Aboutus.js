import React, {useEffect} from "react";
import { Button, Container } from "reactstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from "react-toastify";
const btnHandle=()=>{
    //toast("login succesfull");
    toast.success("update successfully",{
      
    });
};
const Aboutus=()=>{
    useEffect(()=>{
        document.title="About us";
    },[])
    return (
        <div>
            <h1 className="text-center">About us</h1>
                
            <Container className="text-center">
                <Button color="success" onClick={btnHandle}>About Us</Button>&nbsp;
                    
            </Container>

        </div>
    );
};

export default Aboutus;