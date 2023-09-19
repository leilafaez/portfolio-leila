import BaseLayout from "@/component/layouts/BaseLayout";
import BasePage from "@/component/BasePage";
import withAuth from "@/hoc/withAuth";
import { useRouter } from "next/router";
import { useGetPortfolio } from "@/actions/portfolios";
import PortfolioForm from "@/component/PortfolioForm";
import { Col, Row } from "reactstrap";


const PortfolioEdit = ({user}) => {
  const router =useRouter();
  const {data}=useGetPortfolio(router.query.id);
  debugger
  return (
    <BaseLayout user={user} loading={false}>
      <BasePage header="Portfolio Edit">
        <Row>
          <Col md="8">
            {data &&
              <PortfolioForm onSubmit={(data)=>alert(JSON.stringify(data))} initialData={data} />
            }
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};


export default withAuth(PortfolioEdit)("admin");
