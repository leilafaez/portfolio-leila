import BaseLayout from '@/component/layouts/BaseLayout';
import BasePage from '@/component/BasePage';
import { useRouter } from 'next/router';
import { useGetUser } from '@/actions/user';
import PortfolioApi from '@/lib/api/portfolios';
import {  Row,  Col,Button} from "reactstrap";
import PortfolioCard from '@/component/PortfolioCard';
import { isAuthorized } from '@/utils/auth0';

const Portfolio = ({ portfolios }) => {
  const router = useRouter();
  const { data: dataU, loading: loadingU } = useGetUser();

    return (
      <BaseLayout user={dataU} loading={loadingU}>
        <BasePage header="Portfolios" className="portfolio-page">
          <Row>
            {portfolios.map((portfolio) => (
              <Col
                key={portfolio.id}
                onClick={() => {
                  router.push("/portfolio/[id]", `/portfolio/${portfolio._id}`);
                }}
                md="4"
              >
                <PortfolioCard portfolio={portfolio}>
                  {dataU && isAuthorized(dataU,"admin") &&
                    <>
                      <Button onClick={(e)=>{
                        e.stopPropagation();
                        router.push("/portfolio/[id]/edit",`/portfolio/${portfolio._id}/edit`                       );
                      }}
                       className="btn-port" color="warning">
                        Edit
                      </Button>
                      <Button className="btn-port" color="danger">
                        Delete
                      </Button>
                    </>
                  }
                </PortfolioCard>
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