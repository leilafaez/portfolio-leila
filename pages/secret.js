import BaseLayout from "@/component/layouts/BaseLayout";
import BasePage from "@/component/BasePage";
import withAuth from "@/hoc/withAuth";


const Secret = ({data,loading}) => {
  
return(
  <BaseLayout data={data} loading={loading}>
    <BasePage>
      <h1>This is a secret page - Hello{data.name} </h1>
    </BasePage>
  </BaseLayout>
)
  


};



export default withAuth(Secret);
