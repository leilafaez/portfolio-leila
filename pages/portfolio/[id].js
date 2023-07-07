import BaseLayout from "@/component/layouts/BaseLayout";
import { useRouter } from "next/router";

const PortfolioDetail = ()=>{
  const router = useRouter();
    return (
      <>
        <BaseLayout />
        <h1>I am portfolio page</h1>
        <h2>{router.query.id}</h2>
      </>
    );
}

export default PortfolioDetail;