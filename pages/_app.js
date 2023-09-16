import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function App({ Component, pageProp }) {
  return (
    <>
      <NavBar />
      <Component {...pageProp} />

      <style jsx global>{`
        .active {
          color: tomato;
        }
        a {
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
