import Config from "./Config";

class BlogService {

  async getHowToBetItems() {
    try {
      const response = await fetch(`${Config.blogger.endpoint}/v3/blogs/${Config.blogger.howToBetId}/posts?key=${Config.blogger.apiKey}`, {
        method: 'get',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json'
        })
      });
      return this.handleResponse(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getAllBlogPosts() {
    try {
      const response = await fetch(`${Config.blogger.endpoint}/v3/blogs/${Config.blogger.exbetIoId}/posts?maxResults=500&key=${Config.blogger.apiKey}`, {
        method: 'get',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json'
        })
      });
      return this.handleResponse(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static getBlogPostsByLabels(labels = '') {
    return new Promise(async (resolve, reject) => {
      fetch(`${Config.blogger.endpoint}/v3/blogs/${Config.blogger.exbetIoId}/posts?maxResults=500&labels=${labels}&key=${Config.blogger.apiKey}`, {
        method: 'get',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json'
        })
      }).then((response) => {
        if (!response.ok) {
          reject(response.statusText);
        }
        resolve(response.json());
      }).catch((error) => {
        reject(error);
      });
    });
  }

  handleResponse(response) {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }

    return response.json();
  }
}

export default new BlogService();
