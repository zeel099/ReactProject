import React from "react";
import { List, ListGroup, ListGroupItem } from "reactstrap";

const Menus=()=>{
    return(
        <ListGroup>
            <ListGroupItem tag="a" href="/" action>
                Home
            </ListGroupItem>
            <ListGroupItem tag="a" href="/add-course" action>
                Add Course
            </ListGroupItem>
            <ListGroupItem tag="a" href="/view-courses" action>
                View Courses
            </ListGroupItem>
            <ListGroupItem tag="a" href="/about-us" action>
                About
            </ListGroupItem>
            <ListGroupItem tag="a" href="/contact-us" action>
                Contact
            </ListGroupItem>
        </ListGroup>
    );
};

export default Menus;