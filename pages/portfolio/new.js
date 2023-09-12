import BaseLayout from "@/component/layouts/BaseLayout";
import BasePage from "@/component/BasePage";
import withAuth from "@/hoc/withAuth";
import { Row, Col } from "reactstrap";
import PortfolioForm from "@/component/PortfolioForm";
import { useCreatePortfolio } from "@/actions/portfolios";
import Redirect from "@/component/shared/Redirect";

const PortfolioNew = ({ user, loading: userLoading }) => {
  const [createPortfolio, { data, loading, error }] = useCreatePortfolio();

  if (data) {
    return <Redirect to="/api/portfolios" />;
  }
  return (
    <BaseLayout user={user} loading={userLoading}>
      <BasePage header="Create Portfolio">
        <Row>
          <Col md="8">
            <PortfolioForm onSubmit={createPortfolio} />
            {error && <div className="alert alert-danger mt-2">{error}</div>}
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};
export default withAuth(PortfolioNew)("admin");
