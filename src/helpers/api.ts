export default class Api {
    private static url_api = "https://jsonplaceholder.typicode.com";
  
    public static async get(url: string) {
      const response = await fetch(`${this.url_api}${url}`);
  
      if(response.status !== 200) {
          throw new Error("Error fetching data");
      }
      return response.json();
    }
  }
  