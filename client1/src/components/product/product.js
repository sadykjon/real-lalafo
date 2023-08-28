import React, { useEffect } from "react";
import CartItem from "../card-item/card-item";
import { postServices } from "../../http/post-services";
import { useSelector,useDispatch } from "react-redux";
import { getPostAction } from "../../redux/actions/post-action";
import styles from "./product.module.css"
import {useNavigate} from 'react-router-dom'

const Product = () => {
  const { user } = useSelector((state) => state.authReducer);
  const { post } = useSelector((state) => state.postReducer);
  const userId = user._id;
  const dispatch=useDispatch()
  const navigate = useNavigate()
// console.log(post)
  useEffect(() => {
    const getPostData = async () => {
      const data = await postServices.getPost(userId);
      dispatch(getPostAction(data.data))
    };
    getPostData();
  });
  const removePost=async(id)=>{
    console.log(id)
    const data=await postServices.deletePost(id)
    console.log("data>>>", data)
  }
  const updatePost = (postId) => {
    console.log("postId>>>", postId);
    navigate(`/update-post/${postId}`)
  }

  return (
    <div className={styles.card}>
      {
        post.map((elem, index)=>{
            return <CartItem key={index} {...elem} user={user} removePost={removePost} updatePost={updatePost} />
        })
      }
    </div>
  );
};

export default Product;