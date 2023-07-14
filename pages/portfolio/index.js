import BaseLayout from "@/component/layouts/BaseLayout";
import Link from "next/link";
import BasePage from "@/component/BasePage";
import {useGetPosts} from "@/actions"
import { data } from "@/data";


const Portfolio = () => {

  const {posts,error,loading} = useGetPosts();

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
    <BaseLayout>
      <BasePage>
      {loading &&
      <p> Loading data .....</p>

      }
      {posts &&
        <ul>{renderPosts(posts)}</ul>
      }
      {error &&
      <div className="alert alert-danger">{error.message}</div>

      }
      </BasePage>
    </BaseLayout>
  );
};



export default Portfolio;
