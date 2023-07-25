import { useGetUser } from "@/actions/user";
import Redirect from "@/component/shared/Redirect";

const withAuth = (Component) => {
  return (props) => {
    const { data, loading } = useGetUser();

    if (loading) {
      return <p>Loading...</p>;
    }

     if (!data) {
       return <Redirect to="/api/v1/login" />;
     } else {
       return <Component data={data} loading={loading} {...props} />;    
       
     }
  };

 
};

export default withAuth;
