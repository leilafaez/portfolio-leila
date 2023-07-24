import BaseLayout from "@/component/layouts/BaseLayout";
import BasePage from "@/component/BasePage";
import { useGetUser } from "@/actions/user";
import Redirect from "@/component/shared/Redirect";

const Secret = () => {
  const { data, loading } = useGetUser();

  if(loading){
    return<p>Loading...</p>
  }

  if(!data){
    return <Redirect to="/api/v1/login"/>
  }else{
    return (
      <BaseLayout user={data} loading={loading}>
        <BasePage>
          <h1>this Secret page</h1>
        </BasePage>
      </BaseLayout>
    );

  }


};

export default Secret;
