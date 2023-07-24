import BaseLayout from "@/component/layouts/BaseLayout";
import Link from "next/link";
import BasePage from "@/component/BasePage";
import {useGetPosts} from "@/actions";
import { useGetUser } from "@/actions/user";


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
  const { data:dataU, loading:loadingU } = useGetUser();

  return (
    <BaseLayout user={dataU} loading={loadingU}>
      <BasePage>
        {loading && <p> Loading data .....</p>}
        {data && <ul>{renderPosts(data)}</ul>}
        {error && <div className="alert alert-danger">{error.message}</div>}
      </BasePage>
    </BaseLayout>
  );
};



export default Portfolio;
