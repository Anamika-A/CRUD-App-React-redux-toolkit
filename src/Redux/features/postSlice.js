import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {

  isLoading: false,
  data: [],
  isError: false
}

export const getPost = createAsyncThunk('post/getpost',
  async ({ id }) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    return response.json();
  })

export const deletePost = createAsyncThunk('post/deletepost',
  async ({ id }) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`, {
      method: 'DELETE'
    });
    return response.json();
  })
export const createPost = createAsyncThunk('post/createpost',
 async({values})=>{
       const response = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: values.title,
          description: values.description,
          thumbnail: values.thumbnail
        })
      })
      return response.json()
})
export const updatePost = createAsyncThunk('post/updatepost',
  async ({ values }) => {
    const response = await fetch('https://dummyjson.com/products/${id}', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: values.title,
        description: values.description,
        thumbnail: values.thumbnail
      })
    })
return  response.json();

})
export const postSlice = createSlice({
  name: 'post',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getPost.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = [action.payload];
    });
    builder.addCase(getPost.rejected, (state, action) => {
      console.log("Error", action.payload)
      state.isError = true;
    })
    builder.addCase(deletePost.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      console.log("Error", action.payload)
      state.isError = true;
    })
    builder.addCase(createPost.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = [action.payload];
    });
    builder.addCase(createPost.rejected, (state, action) => {
      console.log("Error", action.payload)
      state.isError = true;
    })
    builder.addCase(updatePost.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updatePost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = [action.payload];
    });
    builder.addCase(updatePost.rejected, (state, action) => {
      console.log("Error", action.payload)
      state.isError = true;
    })
  }

})



//export const  {} = postSlice.actions;

export default postSlice.reducer;