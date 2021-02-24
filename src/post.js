const Post = ({ id }) => {
  return <p>Post: {id}</p>;
};

export default Post;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "1" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  return { props: { id } };
}
