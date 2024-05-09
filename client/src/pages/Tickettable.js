import React, {useState, useEffect} from "react";
import Header from '../components/Header2'
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Tickettable(){

  const navigate = useNavigate();

    const deleteReview = (id) => {
        Axios.delete(`http://16.16.182.70:3001/api/deletepoints/${id}`).then(() => {
          alert("delete successfully!");
          navigate("/tickettable");
        })
        .catch(error => {
          console.error('Error deleting review:', error);
        });
    }


const [ticketList, setTicket] = useState([]) 

useEffect(()=>{
  Axios.get('http://16.16.182.70:3001/api/tickets').then((response)=>{
    setTicket(response.data)
  });
  },[]);


return (
  <>
<Header/>
<table className="table">
  <thead>
    <tr>
    <th scope="col">Point Id</th>
      <th scope="col">Q Id</th>
      <th scope="col">studentid</th>
      <th scope="col">Marks</th>
     
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {ticketList.map((val, index) => (
      <tr key={index}>
      <td>{val.idpoints}</td>
        <td>{val.qid}</td>
        <td>{val.studentid}</td>
        <td>{val.points}</td>
       
        <td>
        <div>
                  <button className="btn btn-danger" style={{ marginRight: '10px' }} onClick={() => deleteReview(val.idpoints)}>Delete</button>
                  <Link to={`/ticketupdate/${val.idpoints}`}>
                    <button className="btn btn-primary" style={{ marginRight: '10px' }}>Update</button>
                  </Link>
                  
                </div>
        </td>
      </tr>
    ))}
  </tbody>
</table>

  </>
  
  


);

}

