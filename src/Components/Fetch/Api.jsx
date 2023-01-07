import React, { useEffect, useState, useRef } from "react";
import Axios from "axios";
import Navbar from "../Navbar/Navbar";
const Api = () => {
const data = useRef(null);
const submitHandler = e =>{
  e.preventDefault();
  console.log(data.current.value);
}

useEffect(()=> {
data.current.focus();
},[])
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    Axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
        <Navbar/>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

    <div>
    <center>
    <form onSubmit={submitHandler} >
    <input ref={data} type="text" placeholder="Enter your name"/>
    <input  type="submit"/>
    </form>
    </center>
    </div>
    </div>
  );
};

export default Api;
