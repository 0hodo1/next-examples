import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Hodo App</h1>
      </div>
      <div>
        <p style={{ color: "blue" }}>
          Laborum pariatur sint ut voluptate. Aute deserunt ullamco quis fugiat
          ullamco laborum. Fugiat laboris proident ad amet. Do dolore
          exercitation dolore Lorem dolore sit eiusmod occaecat. Velit sit
          pariatur officia officia magna ad ullamco nulla labore elit eu aliqua
          magna laboris. Consequat adipisicing duis quis velit labore amet
          cupidatat. Sit cillum magna aute aute sint voluptate sint labore eu.
        </p>
      </div>
    </Layout>
  );
}
