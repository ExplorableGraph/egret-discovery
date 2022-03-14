import { ExplorableGraph } from "@explorablegraph/explorable";

export default async function previousKey(variant, key) {
  // Default graph is `this`.
  const graph = ExplorableGraph.from(variant) || this;

  // Default key value is `@key`
  if (key === undefined) {
    key = await graph.get("@key");
  }
  if (key === undefined) {
    return undefined;
  }

  // Find the key, then return the previous key.
  let previousKey;
  for await (const graphKey of graph) {
    if (graphKey === key) {
      return previousKey;
    }
    previousKey = graphKey;
  }

  // Not found
  return undefined;
}
