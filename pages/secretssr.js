import BaseLayout from "@/component/layouts/BaseLayout";
import BasePage from "@/component/BasePage";
import { authorizeUser } from "@/utils/auth0";

const SecretSSR = ({ user }) => {
  return (
    <BaseLayout user={user} loading={false}>
      <BasePage>
        <h1>I am Secret Page - Hello {user && user.name}</h1>
      </BasePage>
    </BaseLayout>
  );
};


export const getServerSideProps = async ({ req, res }) => {
 const user = await authorizeUser(req,res);

 return{
props : {user} 
}
};

export default SecretSSR;
