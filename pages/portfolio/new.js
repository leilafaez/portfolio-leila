import BaseLayout from "@/component/layouts/BaseLayout";
import BasePage from "@/component/BasePage";
import withAuth from "@/hoc/withAuth";

const PortfolioNew = ({user,loading}) => {
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage header="Create Portfolio">
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(PortfolioNew)("admin");
