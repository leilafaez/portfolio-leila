import BaseLayout from "@/component/layouts/BaseLayout";
import BasePage from "@/component/BasePage";
import withAuth from "@/hoc/withAuth";

const Dashboard = ({user,loading}) => {
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage header="Dashboard">
        <h1>some text</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(Dashboard)("admin");
