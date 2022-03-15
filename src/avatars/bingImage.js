import fetch from "node-fetch";

const apiKey = "f30b88c434004a1aa025382b225cf7d1";

export default async function bing(query) {
  const tweakedQuery = `cute+${query}`;
  const response = await fetch(
    `https://api.bing.microsoft.com/v7.0/images/search?q=${tweakedQuery}&count=1&aspect=square&imageType=photo`,
    {
      headers: {
        "Ocp-Apim-Subscription-Key": apiKey,
      },
    }
  );
  const data = await response.json();
  // return data;
  const thumbnail = data.value[0]?.thumbnailUrl;
  return thumbnail;
}
