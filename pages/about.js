import Layout from "../components/layout";
import Head from "next/head";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <h1>About</h1>
      <style jsx>
        {`
          h1 {
            background-color: blue;
            color: white;
          }
        `}
      </style>
      <style global jsx>
        {`
          body {
            background-color: yellow;
          }
          h1 {
            background-color: blue;
            color: white;
          }
        `}
      </style>
    </Layout>
  );
};
export default About;
