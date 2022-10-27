import { ObjectGraph } from "@graphorigami/origami";

export default async function focus(person) {
  const name = await person.get("name");
  const avatar = await person.get("avatar");
  return new ObjectGraph({
    name,
    avatar,
  });
}
