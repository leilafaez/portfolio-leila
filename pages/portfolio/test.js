import BaseLayout from "@/component/layouts/BaseLayout";
import BasePage from "@/component/BasePage";
import withAuth from "@/hoc/withAuth";
import { Row, Col } from "reactstrap";
import PortfolioForm from "@/component/PortfolioForm";

const PortfolioNew = ({ user, loading: userLoading }) => {
  // const createPortfolio = (data) => {
  //   alert(JSON.stringify(data));
  // };
  debugger;
  return (
    <BaseLayout user={user} loading={userLoading}>
      <BasePage>
        <Row>
          <Col md="8">
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  name="title"
                  type="text"
                  className="form-control"
                  id="title"
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">Company</label>
                <input
                  name="company"
                  type="text"
                  className="form-control"
                  id="company"
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">Company Website</label>
                <input
                  name="companyWebsite"
                  type="text"
                  className="form-control"
                  id="companyWebsite"
                />
              </div>
              <div className="form-group">
                <label htmlFor="street">Location</label>
                <input
                  name="location"
                  type="text"
                  className="form-control"
                  id="location"
                />
              </div>
              <div className="form-group">
                <label htmlFor="street">Job Title</label>
                <input
                  name="jobTitle"
                  type="text"
                  className="form-control"
                  id="jobTitle"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  rows="5"
                  type="text"
                  className="form-control"
                  id="description"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="street">Start Date</label>
                <div>{/* Date picker here */}</div>
              </div>
              <div className="form-group">
                <label htmlFor="street">End Date</label>
                <div>{/* Date picker here */}</div>
              </div>
              <button type="submit" className="btn btn-primary">
                Create
              </button>
            </form>

            {/* <PortfolioForm onSubmit={createPortfolio} /> */}
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};
export default withAuth(PortfolioNew)("admin");
