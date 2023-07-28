import BaseLayout from "@/component/layouts/BaseLayout";
import BasePage from "@/component/BasePage";
import withAuth from "@/hoc/withAuth";

const OnlyAdmin = ({ user, loading }) => {
  debugger;
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage>
        <h1>I am admin Page - Hello {user && user.name}</h1>
      </BasePage>
    </BaseLayout>
  );
};
export default withAuth(OnlyAdmin)("admin");
