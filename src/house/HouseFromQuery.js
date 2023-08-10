import { useParams } from "react-router-dom";
import House from "./";

const HouseFromQuery=({allhouses})=>{
const {id}=useParams();
const house= allhouses.find((h)=>h.id===parseInt(id));

if(!house) return <div>House not found {house}</div>
return <House house={house}></House>

};

export default HouseFromQuery;