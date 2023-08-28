// import React, { useState, useEffect } from 'react';
// import TextField from "@mui/material/TextField";
// import Paper from "@mui/material/Paper";
// import styles from "./change-post.module.css";
// import Button from "@mui/material/Button";
// import { useParams } from "react-router-dom";
// import { postServices } from '../../http/post-services';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from "react-redux";

// const ChangePost = () => {
//   const { user } = useSelector((state) => state.authReducer);
//   const userId = user._id;
//   const { postId } = useParams();
//   const [post, setPost] = useState({
//     title: "",
//     brand: "",
//     category: "",
//     price: 0,
//     image: null,
//     description: "",
//   });
//   const navigate = useNavigate();

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const response = await postServices.getPostId(postId);
//         setPost(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     getData();
//   }, [postId]);

//   const handleChangeInput = (e) => {
//     setPost({
//       ...post,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleChangeFile = (e) => {
//     setPost({
//       ...post,
//       image: e.target.files[0]
//     });
//   };

//   const handleUpdatePost = async (e) => {
//     console.log(post)
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append('owner', userId);
//       formData.append('title', post.title);
//       formData.append('brand', post.brand);
//       formData.append('category', post.category);
//       formData.append('price', post.price);
//       formData.append('image', post.image);
//       formData.append('description', post.description);

//       const updateData = await postServices.updatePost(postId, formData);
//       console.log("response update>>>>", updateData);
//       navigate(`/posts`);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <Paper classes={{ root: styles.root }}>
//       <form onSubmit={handleUpdatePost} encType="multipart/form-data">
//         <TextField
//           className={styles.field}
//           type="text"
//           label="Title"
//           variant="standard"
//           fullWidth
//           name="title"
//           value={post.title}
//           onChange={handleChangeInput}
//         />
//         <TextField
//           className={styles.field}
//           type="text"
//           label="Brand"
//           variant="standard"
//           fullWidth
//           name="brand"
//           value={post.brand}
//           onChange={handleChangeInput}
//         />
//         <TextField
//           className={styles.field}
//           type="text"
//           label="Category"
//           variant="standard"
//           fullWidth
//           name="category"
//           value={post.category}
//           onChange={handleChangeInput}
//         />
//         <TextField
//           className={styles.field}
//           type="number"
//           label="Price"
//           variant="standard"
//           fullWidth
//           name="price"
//           value={post.price}
//           onChange={handleChangeInput}
//         />
//         <TextField
//           className={styles.field}
//           type="file"
//           variant="standard"
//           name="image"
//           fullWidth
//           onChange={handleChangeFile}
//         />
//         <TextField
//           className={styles.field}
//           label="Description"
//           multiline
//           rows={5}
//           fullWidth
//           name="description"
//           value={post.description}
//           onChange={handleChangeInput}
//         />
//         <Button type="submit" size="large" variant="contained" fullWidth>
//           Обновить пост
//         </Button>
//       </form>
//     </Paper>
//   );
// };

// export default ChangePost;


import React, { useEffect } from 'react';
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import styles from "./change-post.module.css";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { postServices } from '../../http/post-services';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const ChangePost = () => {
  const { user } = useSelector((state) => state.authReducer);
  const userId = user._id;
  const { postId } = useParams();
  const navigate = useNavigate();
  
  const { register, handleSubmit, setValue, reset } = useForm();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await postServices.getPostById(postId);
        const { title, brand, category, price, description } = response.data;
        setValue("title", title);
        setValue("brand", brand);
        setValue("category", category);
        setValue("price", price);
        setValue("description", description);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [postId, setValue]);

  const handleUpdatePost = async (data) => {
    console.log(data);
    try {
      const formData = new FormData();
      formData.append('owner', userId);
      formData.append('title', data.title);
      formData.append('brand', data.brand);
      formData.append('category', data.category);
      formData.append('price', data.price);
      formData.append('image', data.image[0]);
      formData.append('description', data.description);

      const updateData = await postServices.updatePost(postId, formData);
      console.log("response update>>>>", updateData);
      navigate(`/posts`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Paper classes={{ root: styles.root }}>
      <form onSubmit={handleSubmit(handleUpdatePost)} encType="multipart/form-data">
        <TextField
          className={styles.field}
          type="text"
          label="Title"
          variant="standard"
          fullWidth
          {...register("title")}
        />
        <TextField
          className={styles.field}
          type="text"
          label="Brand"
          variant="standard"
          fullWidth
          {...register("brand")}
        />
        <TextField
          className={styles.field}
          type="text"
          label="Category"
          variant="standard"
          fullWidth
          {...register("category")}
        />
        <TextField
          className={styles.field}
          type="number"
          label="Price"
          variant="standard"
          fullWidth
          {...register("price")}
        />
        <TextField
          className={styles.field}
          type="file"
          variant="standard"
          name="image"
          fullWidth
          {...register("image")}

        />
        <TextField
          className={styles.field}
          label="Description"
          multiline
          rows={5}
          fullWidth
          {...register("description")}
        />
        <Button type="submit" size="large" variant="contained" fullWidth>
          Обновить пост
        </Button>
      </form>
    </Paper>
  );
};

export default ChangePost;