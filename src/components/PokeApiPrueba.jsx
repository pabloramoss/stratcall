import axios from "axios";
import React from "react";

const baseURL = "https://pokeapi.co/api/v2/pokemon/ditto";

export default function PokeApiPrueba() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  console.log(post)

  return (
    <div>
      <h1>{post.abilities[0].ability.name}</h1>
    </div>
  );
}