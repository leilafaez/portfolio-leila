import BaseLayout from "@/component/layouts/BaseLayout";
import BasePage from "@/component/BasePage";
import withAuth from "@/hoc/withAuth";
import {Row,Col} from "reactstrap";
import PortfolioForm from "@/component/PortfolioForm";

const PortfolioNew = ({user,loading : userLoading}) => {

  const createPortfolio = (data)=>{
    alert(JSON.stringify(data));
  }
  return (
    <BaseLayout user={user} loading={userLoading}>
      <BasePage header="Create Portfolio">
        <Row>
          <Col md="8">
            <PortfolioForm onSubmit={createPortfolio} />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(PortfolioNew)();
