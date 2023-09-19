import BaseLayout from "@/component/layouts/BaseLayout";
import BasePage from "@/component/BasePage";
import withAuth from "@/hoc/withAuth";
import { useRouter } from "next/router";
import { useGetPortfolio, useUpdatePortfolio } from "@/actions/portfolios";
import PortfolioForm from "@/component/PortfolioForm";
import { Col, Row } from "reactstrap";


const PortfolioEdit = ({user}) => {
  const router =useRouter();
  const [updatePortfolio, { data, error, loading }] = useUpdatePortfolio();
  const {data : initialData}=useGetPortfolio(router.query.id);
  
  const _updatePortfolio =()=>{
    updatePortfolio(router.query.id,data);
  }

  return (
    <BaseLayout user={user} loading={false}>
      <BasePage header="Portfolio Edit">
        <Row>
          <Col md="8">
            {initialData && (
              <PortfolioForm
                onSubmit={_updatePortfolio}
                initialData={initialData}
              />
            )}
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};


export default withAuth(PortfolioEdit)("admin");
