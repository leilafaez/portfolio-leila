import BaseLayout from "@/component/layouts/BaseLayout";
import BasePage from "@/component/BasePage";
import withAuth from "@/hoc/withAuth";

const blogEditor = ({ user, loading }) => {
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage header="Blog Editor">
        <h1>some text</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(blogEditor)("admin");
