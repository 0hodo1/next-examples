import Navbar from "../components/Navbar";
import Head from "next/head";

const layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Hodo Next</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <div>Design by Hodo</div>
    </div>
  );
};
export default layout;
