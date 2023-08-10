import "./house.css";
import { useState } from "react";
import emailIcon from "./Email.png";
import Inquiry from "./Inquiry";

const House = ({house}) => {
const[inquiryShown,SetInquiryShown]=useState(false);
const inquiryClick=(e)=>{
    SetInquiryShown(!inquiryShown);
};

    return ( 
        <div>
            <div className="row mt-2">
                <h5 className="col-md-12">{house.country}</h5>
            </div>
            <div className="row">
                <h5 className="col-md-12">{house.address}</h5>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <img src={`/images/${house.photo}.jpeg`} alt="House" />
                </div>           
                <div className="col-md-5">
                     <p className="price">${house.price}</p>
                     <p>{house.description}</p>
                     <img
                     src={emailIcon}
                     height="50"
                     alt="Inquiry"
                     onClick={inquiryClick}
                     />
                     {inquiryShown && <Inquiry house={house}/>}
                </div>
            </div>
        </div>

     );
};
 
export default House;