import React from 'react';

import {NavLink} from "react-router-dom"; 

const Card=(props)=>{
    return(
    <>
    
        <div className="col-md-4 col-10 mx-auto">


        <div className="card" >
  <img style={{height:150,margin:20}} src={props.imgsrc} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
    
    <NavLink to="" class="btn btn-primary">Learn</NavLink>
  </div>
</div>


        </div>





    
    </>
);
    };
    export default Card;