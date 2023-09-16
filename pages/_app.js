import "../styles/globals.css";
import Layout from "./Layout";

export default function App({ Component, pageProp }) {
  return (
    <Layout>
      <Component {...pageProp} />
      <style jsx global>{`
        .active {
          color: tomato;
        }
        a {
          text-decoration: none;
        }
      `}</style>
    </Layout>
  );
}
