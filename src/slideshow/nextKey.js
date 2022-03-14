import { ExplorableGraph } from "@explorablegraph/explorable";

export default async function nextKey(variant, key) {
  // Default graph is `this`.
  const graph = ExplorableGraph.from(variant) || this;

  // Default key value is `@key`
  if (key === undefined) {
    key = await graph.get("@key");
  }
  if (key === undefined) {
    return undefined;
  }

  // Find the key, then find the next key.
  let wantNextKey = false;
  for await (const graphKey of graph) {
    if (wantNextKey) {
      return graphKey;
    }
    if (graphKey === key) {
      wantNextKey = true;
    }
  }

  // Not found
  return undefined;
}
