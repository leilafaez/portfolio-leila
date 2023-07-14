import BaseLayout from "@/component/layouts/BaseLayout";
import Link from "next/link";
import BasePage from "@/component/BasePage";
import { useEffect ,useState} from "react";


const Portfolio = () => {
  const [posts,setPosts]=useState([]);

  useEffect(()=>{
    async function getPosts(){
      const res = await fetch(`/api/v1/posts`);
      const data = await res.json();
      setPosts(data)
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



export default Portfolio;
