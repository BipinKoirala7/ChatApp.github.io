export default async function useFetch() {
    const url = "https://hargrimm-wikihow-v1.p.rapidapi.com/steps?count=1"
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1e70e5d09amshdf1eb4eedbc71acp1cebf7jsn509094adad41",
        "X-RapidAPI-Host": "hargrimm-wikihow-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result)
      return result
    } catch (error) {
      return error
    }
}