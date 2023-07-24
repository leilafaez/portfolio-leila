import BaseLayout from "@/component/layouts/BaseLayout";
import BasePage from "@/component/BasePage";
import { useGetUser } from "@/actions/user";

const CV = () => {
    const { data, loading } = useGetUser();

  return (
    <BaseLayout user={data} loading={loading}>
    <BasePage>
      <h1>this cv page</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default CV;
