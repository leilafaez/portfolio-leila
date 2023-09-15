import BaseLayout from "@/component/layouts/BaseLayout";
import BasePage from "@/component/BasePage";
import { useRouter } from "next/router";
import { useGetUser } from "@/actions/user";
import PortfolioApi from "@/lib/api/portfolios";

const Portfolio = ({ portfolio }) => {
  const router = useRouter();
  const { data: dataU, loading: loadingU } = useGetUser();

  return (
    <BaseLayout user={dataU} loading={loadingU}>
      <BasePage header="Portfolio Detail">{JSON.stringify(portfolio)}</BasePage>
    </BaseLayout>
  );
};

// export async function getServerSideProps({query}){
//   const json= await new PortfolioApi().getById(query.id);
//   const portfolio=json.data;

//   return{props : {portfolio}};
// }

//This function is executed at the build time
export async function getStaticPaths() {
  const json = await new PortfolioApi().getAll();
  const portfolio = json.data;
  //Get the paths we want to pre-render based on portfolio ID
  const paths = portfolio.map((port) => {
    return {
      params: { id: port._id },
    };
  });
  //fallback:false means that "not found pages" will be resolved into 404 page
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const json = await new PortfolioApi().getById(params.id);
  const portfolio = json.data;
  return { props: { portfolio } };
}

export default Portfolio;
