import BaseLayout from "@/component/layouts/BaseLayout";
import BasePage from "@/component/BasePage";
import { authorizeUser, withAuth } from "@/utils/auth0";

const SecretSSR = ({ user,title }) => {
  debugger
  return (
    <BaseLayout user={user} loading={false}>
      <BasePage>
        <h1>I am Secret Page - Hello {user && user.name}</h1>
        <h2>{title}</h2>
      </BasePage>
    </BaseLayout>
  );
};


// export const getServerSideProps = async ({ req, res }) => {
//  const user = await authorizeUser(req,res);

//  return{
// props : {user} 
// }
// };

const getTitle =()=>{
  return new Promise((res)=>{
    setTimeout(() => {
      res({title : "my new title"})
    }, 500);
  })
}

export const getServerSideProps =withAuth(async()=>{
  const title = await getTitle();
  return title;
});

export default SecretSSR;
