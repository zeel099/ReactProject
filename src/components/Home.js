import React, { useEffect } from "react";
import {jumbotron,Container,Button} from "reactstrap";
import {ToastContainer,toast} from "react-toastify";
const btnHandle=()=>{
    //toast("login succesfull");
    toast.success("success",{
      
    });
};
const Home =()=>{
    useEffect(()=>{
        document.title="Home || LearnCodeWith zeel";
    },[])

    return (
        <div>
            <jumbotron className="text-center" background="primary">

                <h1 >zeel sojitra</h1>
                <p>This is backend courses of java</p>
                <Container>
                    <Button color="primary" outline onClick={btnHandle}>Start Using</Button>
                </Container>
            </jumbotron>
        </div>
    );
};

export default Home;