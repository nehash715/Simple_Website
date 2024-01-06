import React from 'react';


import web from "../src/img2.svg";
import Common from './Commom';

const About=()=>{
    return(
    <>
    <Common name='Welcome To About Page' imgsrc={web} visit="/contact" btname="Contact Now"/>
    </>
);
    };
    export default About;