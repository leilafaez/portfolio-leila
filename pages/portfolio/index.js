import BaseLayout from "@/component/layouts/BaseLayout";
import axios from "axios";
import Link from "next/link";
import BasePage from "@/component/BasePage";
import { useEffect } from "react";


const Portfolio = ({ posts }) => {

  useEffect(()=>{
    async function getPosts(){
      const res = await fetch(`/api/v1/posts`);
      const data = await res.json();
    }
    getPosts();
  },[])

  const renderPosts = () => {
    return posts.map((post) =>
     <li key={post.id}>
      <Link legacyBehavior href={`/portfolio/${post.id}`} >
        <a>
          {post.title}
        </a>
      </Link>
     </li>);
  };
  return (
    
      <BaseLayout >
      <BasePage>
      <ul>{renderPosts()}</ul>
      </BasePage>
      </BaseLayout>
    
  );
};

Portfolio.getInitialProps = async () => {
  let posts = [];
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    posts = res.data;
  } catch (e) {
    console.error(e);
  }

  return { posts: posts.slice(0, 10) };
};

export default Portfolio;
