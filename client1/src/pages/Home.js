import React, { useEffect } from "react";
import { postServices } from "../http/post-services";
import { getAllProduct } from "../redux/actions/post-action";
import { useSelector, useDispatch } from "react-redux";
import HomeCard from "../components/home-card/home-card";

const Home = () => {
  const dispatch = useDispatch();
  const { allProduct } = useSelector((state) => state.postReducer);

  useEffect(() => {
    const getAll = async () => {
      const data = await postServices.getPostAll(); // console.log("data>>>", data)
      dispatch(getAllProduct(data.data));
    };
    getAll();
  }, []);
  console.log(allProduct);
  return (
    <div className="home-card">
      {allProduct.map((elem, index) => {
        return <HomeCard key={index} {...elem} />;
      })}
    </div>
  );
};

export default Home;
