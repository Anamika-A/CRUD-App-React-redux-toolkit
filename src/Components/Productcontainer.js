import React from 'react'
import {useDispatch} from 'react-redux';
import { deletePost } from '../Redux/features/postSlice';
import {useNavigate} from 'react-router-dom';
const Productcontainer = ({prod}) => {
   
     const dispatch =  useDispatch();
     const navigate = useNavigate();
     const handleDelete = ({id})=>{
          dispatch(deletePost({id : prod.id}));
          alert("Post Deleted");
     }
  return (
    <div className='postdata_container'>
      <div className="card bg-secondary postdata_card" style={{ width: '100%', height: '100%' }}>
        
        <img class="card-img-top" src={prod.thumbnail} alt="Card" /> 

        <div className="card-body d-flex flex-column justify-content-sm-between">
          <div className='card-title' style={{fontSize:'2rem'}}>{prod.title}</div>
          <div class="card-text">{prod.description}</div>
          <div className='card_button '>
            <button className="btn btn-warning me-3" onClick= {()=>navigate("/Createpost")}>Edit</button>
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productcontainer;