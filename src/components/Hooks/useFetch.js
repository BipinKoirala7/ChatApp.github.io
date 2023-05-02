export default async function useFetch(msg) {
    const url =
      `https://acobot-brainshop-ai-v1.p.rapidapi.com/get?bid=178&key=sX5A2PcYZbsN5EY6&uid=mashape&msg=${msg}!`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1e70e5d09amshdf1eb4eedbc71acp1cebf7jsn509094adad41",
        "X-RapidAPI-Host": "acobot-brainshop-ai-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result
    } catch (error) {
      return error
    }
}