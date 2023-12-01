import React, { useState } from 'react'
//import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { getPost } from '../Redux/features/postSlice'
import Productcontainer from './Productcontainer';

const Post = () => {

    const [id, setId] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const products = useSelector(state=>state.postdata)

    const handlefetchpost = (e) => {
        e.preventDefault();
        if (!id) {
            alert("Please input the Id")
        }
        else {
            dispatch(getPost({id}));
            console.log(id);
            console.log(products.data);
            setId('');
        }

        
    }
    return (
        <div className='post_container'>
            <div className='row d-flex align-items-center justify-content-center mt-5'>
                <div className='col-md-8'>
                    <form>
                        <div className="mb-3" >
                            <label htmlFor="Inputnumber" className="form-label">Search by ID :</label>
                            <input type="number" className="form-control form-control-lg" id="Inputnumber" aria-describedby="emailHelp" value={id} onChange={(e) => setId(e.target.value)} />

                        </div>
                        <div>
                            <button type="submit" className="btn px-3 btn-primary me-3 btn-lg" onClick={handlefetchpost}>Fetch Post</button>
                            <button type="submit" className="btn px-3 btn-warning btn-lg" onClick={() => navigate("/Createpost")}>Create Post</button>

                        </div>

                    </form>
                </div>
            </div>
            {
                (products.isLoading) ? 
                (
                  <div className='loader'>
                    <div className="spinner-border  text-danger " style={{width:'50px',height:'50px'}}></div>
                  </div>
                ) 
                    :
                (
                    (products.data.length > 0) && products.data.map((prod)=>(
                               <Productcontainer key = {prod.id} prod={prod} />
                    ))
                )
            }
        </div>
    )
}

export default Post;