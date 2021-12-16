import axios from "axios";
import React from "react";

const baseURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCjg1YvYLP3KbPPdEZ57GJuA&maxResults=3&order=date&type=video&key=AIzaSyBXZtNWAIPt_UFPzWBjbmkoacjsN9sR4QM";

export default function NewVideoList() {
  const [post, setPost] = React.useState(null);

  React.useEffect(()=>{
    getAllPost();
  },[]);

  const getAllPost = ()=> {
    axios.get(baseURL).then((response)=>{
      const allPost = response.data;
      setPost(allPost);
    }).catch(error => console.error("error paa"));
  }

  ////////////
/*
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(response.data)
    });
  }, []);

  if (!post) return null;
  */


  return (
    <div>
      <h1>{post}</h1>
    </div>
  );
}