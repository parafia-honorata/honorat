import Config from "./Config";

class BlogService {

  async getNewsItem() {
    try {
      const response = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${Config.blogger.blogKey}/posts/${Config.blogger.newsPostKey}?fetchBody=true&fetchImages=false&key=${Config.blogger.apiKey}`, {
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

  async getIntensionsItem() {
    try {
      const response = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${Config.blogger.blogKey}/posts/${Config.blogger.intensionsPostKey}?fetchBody=true&fetchImages=false&key=${Config.blogger.apiKey}`, {
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

  async getAdditionalInfoItem() {
    try {
      const response = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${Config.blogger.blogKey}/posts/${Config.blogger.visitsKey}?fetchBody=true&fetchImages=false&key=${Config.blogger.apiKey}`, {
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

  handleResponse(response) {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }

    return response.json();
  }
}

export default new BlogService();
