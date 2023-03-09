import React ,{useEffect, useState} from "react";
import { Button, Container, Form, FormGroup } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from "react-toastify";
import axios from "axios";
import base_url from "../Api/bootapi";
const btnHandle=()=>{
    toast.success("course added successfully",{

    });
};
const btnhandle=()=>{
    toast.warning("clear",{

    });
};
const AddCourse=()=>{
    useEffect(()=>{
        document.title="Add Courses";
    },[]);

    const [course,setCourses]=useState({});
    const handleSubmit=(event)=>{
        console.log(course);
        postDatatoServer(course);
        event.preventDefault();
    };
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setCourses({ ...course, [name]: value });
      };

      const postDatatoServer=(data)=>{
        axios.post(`${base_url}/course`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("course has been added successfully");
            },
            (error)=>{
                console.log(error);
                console.log("error");
                toast.error("something went wrong");
            }
        );
      };
    return (
        <div>
            <h1 className="text-center">Fill course details</h1>
            <Form style={{margin:"20px"}} onSubmit={handleSubmit}>
                <FormGroup>
                    <label for="userid">Course Id : </label><br/>
                    <input 
                    type="text" 
                    placeholder="Enter here" 
                    name="userid" 
                    id="id"
                    onChange={handleChange}
                    style={{width:"100%"}}/>
                </FormGroup>
                <FormGroup>
                    <label for="title">Course Title :</label><br/>
                    <input
                        type="text"
                        placeholder="Enter title here"
                        name="title"
                        id="title"
                        onChange={handleChange}
                        style={{width:"100%"}}
                        />
                </FormGroup>
                <FormGroup>
                    <label for="description" >Course Description :</label><br/>
                    <input
                        type="textarea"
                        placeholder="Enter description here"
                        name="description"
                        id="description"
                        onChange={handleChange}
                        style={{height:180,width:"100%"}}
                        />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Add Course</Button>&nbsp;
                    <Button color="warning ml-3" >Clear</Button>
                </Container>
            </Form>
        </div>
    );
};

export default AddCourse;