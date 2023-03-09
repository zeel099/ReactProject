import axios from "axios";
import React from "react";

import {ToastContainer,toast} from "react-toastify";
import{
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
    Row,
    Col,
} from "reactstrap";
import base_url from "../Api/bootapi";

const btnHandle=()=>{
    //toast("login succesfull");
    toast.success("delete successully",{
      
    });
};
const btunHandle=()=>{
    //toast("login succesfull");
    toast.success("update successfully",{
      
    });
};
const Course=({course,update})=>{

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                toast.success("course deleted");
                update(id);
            },
            (error)=>{
                toast.error("course not deleted !! server problem");
            }
        );
    };
    return (
                    <Card className="text-center" >
                    <CardBody >
                        <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                        <CardText>{course.description}</CardText>
                        <Container  className="text-center">
                            <Button color="danger" 
                            onClick={()=>{
                                deleteCourse(course.id);
                            }}>
                                
                                Delete
                            </Button>&nbsp;
                            <Button color="warning ml-3"   onClick={btunHandle}>Update</Button>
                        </Container>
                    </CardBody>
                    </Card>   
    );
};
export default Course;