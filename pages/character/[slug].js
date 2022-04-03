import Layout from "../../components/layout";
import unfetch from "isomorphic-unfetch";
import slug from "slug";

export default function CharacterDetail({ character }) {
  return (
    <Layout>
      <div>
        <h1>Character Detail</h1>
      </div>
      <h3>{character.name}</h3>

      <figure>
        <img src={character.image} alt={character.name} />
      </figure>
    </Layout>
  );
}

export async function getStaticPaths() {
  // data fetching
  const data = await unfetch("https://rickandmortyapi.com/api/character/");
  const characters = await data.json();
  return {
    // paths: [
    //   { params: { ... } }
    // ],
    paths: characters.results.map((character) => {
      return { params: { slug: `${slug(character.name)}-${character.id}` } };
    }),
    fallback: false, // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const id = params.slug.split("-").slice(-1)[0];
  // data fetching
  const data = await unfetch("https://rickandmortyapi.com/api/character/" + id);
  const character = await data.json();
  return {
    props: {
      character,
    },
  };
}
