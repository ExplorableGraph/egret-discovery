import { ExplorableGraph, parse } from "@explorablegraph/explorable";

export default async function addKey(variant, indexKey = "bodyText") {
  const graph = ExplorableGraph.from(variant);
  return {
    async *[Symbol.asyncIterator]() {
      for await (const key of graph[Symbol.asyncIterator]()) {
        const value = await graph.get(key);
        const data = value ? await dataFromInput(value, graph) : undefined;
        if (data !== undefined) {
          const index =
            typeof data === "string" && indexKey === "bodyText"
              ? data
              : data[indexKey];
          yield index;
        }
      }
    },

    async get(key) {
      for await (const graphKey of graph[Symbol.asyncIterator]()) {
        const value = await graph.get(graphKey);
        const data = value ? await dataFromInput(value, graph) : undefined;
        if (data !== undefined) {
          const index =
            typeof data === "string" && indexKey === "bodyText"
              ? data
              : data[indexKey];
          if (index === key) {
            return data;
          }
        }
      }
      return undefined;
    },
  };
}

async function dataFromInput(input, graph) {
  let parsed = input;
  if (typeof input === "string" || input instanceof Buffer) {
    parsed = await parse(String(input));
    if (typeof parsed === "string") {
      return parsed;
    }
  }
  const data = ExplorableGraph.isExplorable(parsed)
    ? await ExplorableGraph.plain(composed)
    : parsed;
  return data;
}
