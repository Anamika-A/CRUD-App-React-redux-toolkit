import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { createPost,updatePost } from '../Redux/features/postSlice'
import Productcontainer from './Productcontainer'

const Createpost = () => {

    const [values, setValues] = useState({title:'', description:'', thumbnail:''});
    const {title, description,thumbnail}  = values;
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const products = useSelector(state=>state.postdata)
    
    const handleCreate = (e)=>{
        e.preventDefault();
        dispatch(createPost({values}));
        setValues({title:'', description:'', thumbnail:''});
        
    }

    const handleUpdate = (e)=>{
           e.preventDefault();
           
           dispatch(updatePost({values}))
           setValues({title:'', description:'', thumbnail:''});
    }

  return (
      <div style={{width:'100vw', height:'100vh'}}>
          <div className='createpost_container' style={{ width: '50%', margin: 'auto' }}>
              <h2 style={{ backgroundColor: 'black', color: 'white', textAlign: 'center', height: '7vh', paddingTop: '1vh'}}>Create  Post</h2>
              <form>
                  <div className='d-flex flex-column' >
                      <div className="mb-3" >

                          <label htmlFor="posttitle" className="form-label"  style={{fontSize:'2rem'}}>Post Title</label>
                          <input type="input" className="form-control form-control-lg" id="posttitle" aria-describedby="Title" placeholder='Enter the Post Title' value={title}
                           onChange={(e)=>setValues({...values, title:e.target.value})}/>

                      </div>
                      <div className="mb-3">

                          <label htmlFor="postbody" className="form-label"  style={{fontSize:'2rem'}}>Post Content</label>
                          <textarea class="form-control" id="postbody" rows="4" placeholder='Enter the Post Content' value={description}
                          onChange={(e)=>setValues({...values, description:e.target.value})} >
                          </textarea>

                      </div>
                      <div className="mb-3" >

                          <label htmlFor="postthumbnail" className="form-label"  style={{fontSize:'2rem'}}>Post Image</label>
                          <input type="input" className="form-control form-control-lg" id="posthumbnail" aria-describedby="Thumbnail" placeholder='Enter the Post Thumbnail Url' value={thumbnail}
                           onChange={(e)=>setValues({...values, thumbnail:e.target.value})}/>

                      </div>
                      <div style={{ marginTop: '10px' }}>

                          <button type="submit" className="btn btn-success btn-lg me-3" onClick={handleCreate}>Create</button>
                          <button className='btn btn-warning btn-lg me-3' onClick={handleUpdate}>Update</button>
                          <button className='btn btn-primary btn-lg' onClick={()=> navigate('/')}>Go Home</button>

                      </div>
                  </div>
              </form>
          </div>
          {
            products.data.length > 0 && (products.data.map((prod)=>(
                <Productcontainer key={prod.id} prod={prod} />
            )))
          }
      </div>

  )
}

export default Createpost