import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss"

export default function App({ Component, pageProps }) {
  console.log(process.env.AUTH0_DOMAIN);
  return <Component {...pageProps} />
}
