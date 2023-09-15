import BaseLayout from "@/component/layouts/BaseLayout";
import BasePage from "@/component/BasePage";
import withAuth from "@/hoc/withAuth";


const PortfolioEdit = () => {
 
  return (
    <BaseLayout user={user} loading={false}>
      <BasePage header="Portfolio Detail"></BasePage>
    </BaseLayout>
  );
};


export default withAuth(PortfolioEdit)("admin");
