//import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import {Button, Col, Container, Row} from "reactstrap";
import {ToastContainer,toast} from "react-toastify";
import Home from "./components/Home";
import Course from "./components/Course";
import Allcourses from "./components/Allcourses";
import AddCourse from "./components/AddCourse";
import Contact from "./components/Contact";
import Menus from "./components/Menus";
import Aboutus from "./components/Aboutus";
import {BrowserRouter as Router ,Route,Routes} from "react-router-dom";


function App() {

  const btnHandle=()=>{
      //toast("login succesfull");
      toast.success("done",{
        position:"top-center",
      });
  };
  return (
    <>
        <Router>
            <ToastContainer/>
            <Container>
                <Header/>
                 
                <Row>
                  <Col md={4}>
                    <Menus/>
                  </Col>
                  <Col md={8}>
                   
                    <Routes>
                        <Route path="/" element={<Home/>} exact/>
                        <Route path="/add-course" element={<AddCourse/>} exact/>
                        <Route path="/view-courses" element={<Allcourses/>} exact/> 
                        <Route path="/contact-us" element={<Contact/>} exact/> 
                        <Route path="/about-us" element={<Aboutus/>} exact/> 

                    </Routes>
                     
                  
                  </Col>
                </Row>
              </Container>
        </Router>
       
    </>
    
  );
};


export default App;
