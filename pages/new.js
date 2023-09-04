import BaseLayout from '../component/layouts/BaseLayout';
import BasePage from '../component/BasePage';
import withAuth from '@/hoc/withAuth';
import { Row, Col } from 'reactstrap';
import PortfolioForm from '@/component/PortfolioForm';
import { createPortfolio } from '@/actions/portfolios';

const PortfolioNew = ({user, loading: userLoading}) => {
  const _createPortfolio = (data) => {
    alert(JSON.stringify(data));
    createPortfolio(data);
  }
  return (
    <BaseLayout user={user} loading={userLoading}>
      <BasePage header="Create Portfolio">
        <Row>
          <Col md="8">
            <PortfolioForm onSubmit={_createPortfolio} />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}
export default withAuth(PortfolioNew)('admin');