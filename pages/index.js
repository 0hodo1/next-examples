import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import unfetch from "isomorphic-unfetch";
import slug from "slug";

export default function Home({ characters }) {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Hodo RandM API App</h1>
      </div>
      <div>
        <ul>
          {characters.results.map((character) => (
            <li key={character.id}>
              <Link
                href="/character/[slug]"
                as={`/character/${slug(character.name)}-${character.id}`}
              >
                <a>{character.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // data fetching
  const data = await unfetch("https://rickandmortyapi.com/api/character");
  const characters = await data.json();
  return {
    props: {
      characters,
    },
  };
}
