export const mdYamlRegex = /```yaml\r?\n(?<yaml>[\s\S]*?)```/g;

export default function mdYaml(markdownBuffer) {
  const markdown = String(markdownBuffer);
  const matches = [...markdown.matchAll(mdYamlRegex)];
  const texts = matches.map((match) => match.groups.yaml);
  const normalized = texts.map((text) =>
    text?.toString().replace(/\r\n/g, "\n")
  );
  return normalized;
}
