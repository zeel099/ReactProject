import React, { useState,useEffect } from "react";
import Course from "./Course";
import { Button, Container, Form, FormGroup } from "reactstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from "react-toastify"
import base_url from "../Api/bootapi";
import axios from "axios";


const Allcourses=() =>{

    useEffect(()=>{
        document.title="All Courses";
    },[]);
   
   // functiom to call server
    const getAllCoursesFromServer = () =>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                //success
                //console.log(response);
                console.log(response.data);
                toast.success("courses has been loaded",{
                    position : "bottom-center",
                });
                setCourses(response.data);
            },
            (error)=>{
                //error
                console.log(error);
                toast.error("something went wrong");
            }
        )
    };
    // calling lod course function
    useEffect(()=>{
        getAllCoursesFromServer();
    },[]);
  
    const [courses,setCourses]=useState([
        // {title: "Java Course",description:"This is java course"},
        // {title: "Spring Course",description:"This is spring Course"},
        // {title: "Python Course",description:"This is Python Course"},
        // {title: "React courses", description:"This is react course"},
    ]);
    const updatCourses=(id)=>{
        setCourses(courses.filter((c)=>c.id!=id));
    };
    return (
        <div>
            {/* <Button 
                onClick={()=>{
                    console.log("test");
                    
                    setCourses([
                        ...courses,{
                            title:"Angular js",
                            description:"this is demo course",
                        },
                    ]);
                }}>
                    Test
            </Button> */}
            <h1>All courses</h1>
            <p> List of courses are as follows</p>
            
            { courses.length>0 
                 ? courses.map((item)=> <Course  key={item.id} course={item} updat={updatCourses}/>)
                    
                : "NO courses"}
        </div>
    );
};

export default Allcourses;