import {
  builtins,
  Compose,
  DefaultPages,
  FilesGraph,
  MapExtensionsGraph,
  mapKeys,
  ObjectGraph,
  OrigamiTemplate,
  Scope,
} from "@explorablegraph/explorable";
import path from "path";
import { fileURLToPath } from "url";
import bingImage from "./bingImage.js";
import teamData from "./team.js";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const files = await new FilesGraph(dirname);

const baseScope = new Scope(files, builtins);

const personTemplateText = String(await files.get("person.ori"));
const personTemplate = new OrigamiTemplate(personTemplateText, baseScope);

const indexTemplateText = String(await files.get("index.ori"));
const indexTemplate = new OrigamiTemplate(indexTemplateText, baseScope);

const teamByName = await mapKeys(
  teamData,
  async (person) => await person.get("name")
);

const avatars = new MapExtensionsGraph(
  teamByName,
  async (person) => bingImage(await person.get("avatar")),
  {
    innerExtension: "",
    outerExtension: ".jpeg",
  }
);

const team = new MapExtensionsGraph(
  teamByName,
  async function (person) {
    return personTemplate.apply(person, this);
  },
  {
    innerExtension: "",
    outerExtension: ".html",
  }
);

let scope;
const indexHtml = async function () {
  return indexTemplate.apply(null, scope);
};

const virtual = new ObjectGraph({
  avatars,
  "index.html": indexHtml,
  team,
  teamData,
  teamByName,
});

scope = new Scope(virtual, baseScope);

const composed = new Compose(virtual, files);

export default new DefaultPages(composed);
