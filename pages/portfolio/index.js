import BaseLayout from "@/component/layouts/BaseLayout";
import Link from "next/link";
import BasePage from "@/component/BasePage";
import {useGetPosts} from "@/actions";


const Portfolio = () => {

  const { data, error, loading } = useGetPosts();

  const renderPosts = () => {
    return data.map((post) =>
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
      {data &&
        <ul>{renderPosts(data)}</ul>
      }
      {error &&
      <div className="alert alert-danger">{error.message}</div>

      }
      </BasePage>
    </BaseLayout>
  );
};



export default Portfolio;
