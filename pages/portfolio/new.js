import BaseLayout from "@/component/layouts/BaseLayout";
import BasePage from "@/component/BasePage";
import withAuth from "@/hoc/withAuth";
import {Row,Col} from "reactstrap";
import PortfolioForm from "@/component/PortfolioForm";

const PortfolioNew = ({user,loading}) => {
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage header="Create Portfolio">
        <Row>
          <Col md="8">
           <PortfolioForm/>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(PortfolioNew)("admin");
