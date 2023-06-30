import BaseLayout from "@/component/layouts/BaseLayout";
import axios from "axios";

const Portfolio = ({posts}) => {

    const renderPosts = ()=>{
        return posts.map(post=><li key={post.id}>{post.id}</li>)
    }
  return (
    <>
      <BaseLayout />
      <ul>{renderPosts()}</ul>
    </>
  );
}

Portfolio.getInitialProps = async()=>{

    let posts = [];
    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        posts = res.data;
    }catch(e){
        console.error(e);
    }

    return{posts : posts.slice(0,10)}
}

export default Portfolio;
