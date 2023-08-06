import BaseLayout from '@/component/layouts/BaseLayout';
import BasePage from '@/component/BasePage';
import Link from 'next/link';
import { useGetUser } from '@/actions/user';
import PortfolioApi from '@/lib/api/portfolios';

const Portfolio = ({ portfolios }) => {
  
  const { data: dataU, loading: loadingU } = useGetUser();

  const renderPortfolios = (portfolios) => {
    return portfolios.map((portfolio) => (
      <li key={portfolio._id} style={{ fontSize: "20px" }}>
        <Link as={`/portfolios/${portfolio._id}`} href="/portfolios/[id]">
          <a>{portfolio.title}</a>
        </Link>
      </li>
    ));
  };
  return (
    <BaseLayout user={dataU} loading={loadingU}>
      <BasePage>
        <ul>{renderPortfolios(portfolios)}</ul>
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