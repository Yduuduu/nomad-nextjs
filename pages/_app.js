import "../styles/globals.css";
import Layout from './../components/Layout';

export default function App({ Component, pageProp }) {
  return (
    <Layout>
      <Component {...pageProp} />
    </Layout>
  );
}
