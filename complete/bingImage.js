import fetch from "node-fetch";

const apiKey = "f30b88c434004a1aa025382b225cf7d1";

export default async function bing(query) {
  const response = await fetch(
    `https://api.bing.microsoft.com/v7.0/images/search?q=${query}&count=1&aspect=square&imageType=photo`,
    {
      headers: {
        "Ocp-Apim-Subscription-Key": apiKey,
      },
    }
  );
  const data = await response.json();
  const thumbnailUrl = data.value[0]?.thumbnailUrl;
  const thumbnailResponse = await fetch(thumbnailUrl);
  const arrayBuffer = await thumbnailResponse.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  return buffer;
}
