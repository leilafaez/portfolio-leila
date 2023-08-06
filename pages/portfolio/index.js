import BaseLayout from '@/component/layouts/BaseLayout';
import BasePage from '@/component/BasePage';
import Link from 'next/link';
import { useGetUser } from '@/actions/user';
import PortfolioApi from '@/lib/api/portfolios';
import {  Row,  Col} from "reactstrap";
import PortfolioCard from '@/component/PortfolioCard';

const Portfolio = ({ portfolios }) => {

  const { data: dataU, loading: loadingU } = useGetUser();

    return (
      <BaseLayout user={dataU} loading={loadingU}>
        <BasePage className="portfolio-page">
          <Row>
            {portfolios.map((portfolio) => (
              <Col key={portfolio.id} md="4">
                <PortfolioCard portfolio={portfolio}/>
              </Col>
            ))}
          </Row>
        </BasePage>
      </BaseLayout>
    );
};
// This function is called during the build time
// Improved performance of page,
// It will create static page with dynamic data
export async function getStaticProps() {
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;
  return {
    props: { portfolios },
  };
}
export default Portfolio;