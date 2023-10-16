import BaseLayout from "@/component/layouts/BaseLayout";
import BasePage from "@/component/BasePage";
import { useRouter } from "next/router";
import { useGetUser } from "@/actions/user";
import {formatDate} from "@/helpers/function"
import PortfolioApi from "@/lib/api/portfolios";

const Portfolio = ({ portfolio }) => {
  const router = useRouter();
  const { data: dataU, loading: loadingU } = useGetUser();

  if(router.isFallback){
    return<h1>Your page is getting server!</h1>
  }

  return (
    <BaseLayout user={dataU} loading={loadingU}>
      <BasePage className="detail-page">
        <div className="portfolio-detail">
          <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <main role="main" class="inner page-cover">
              {router.isFallback && (
                <h1 className="cover-heading">
                  Your page is getting server....
                </h1>
              )}
              {!router.isFallback && (
                <>
                  <h1 className="cover-heading">{portfolio.title}</h1>
                  <p className="lead dates">
                    {formatDate(portfolio.startDate)} - 
                    {formatDate(portfolio.endDate) || "Present"}
                  </p>
                  <p className="lead info mb-0">
                    {portfolio.jobTitle} | {portfolio.company} |{" "}
                    {portfolio.location}
                  </p>
                  <p className="lead">{portfolio.description}</p>
                  <p className="lead">
                    <a
                      href={portfolio.companyWebsite}
                      target="_"
                      className="btn btn-lg btn-secondary"
                    >
                      Visit Website
                    </a>
                  </p>
                </>
              )}
            </main>
          </div>
        </div>
        ;
      </BasePage>
    </BaseLayout>
  );
};


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
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const json = await new PortfolioApi().getById(params.id);
  const portfolio = json.data;
  return { props: { portfolio }, unstable_revalidate: 60 };
}

export default Portfolio;
