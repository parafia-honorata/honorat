import Config from "./Config";

class BlogService {

  async getItem(postKey) {
    try {
      const response = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${Config.blogger.blogKey}/posts/${postKey}?fetchBody=true&fetchImages=false&key=${Config.blogger.apiKey}`, {
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

  async getNews() {
    return this.getItem(Config.blogger.newsPostKey);
  }

  async getNewsgetIntensions() {
    return this.getItem(Config.blogger.intensionsPostKey);
  }

  async getAdditionalInfo() {
    return this.getItem(Config.blogger.additionalInfoKey);
  }

  async getFlashNews() {
    return this.getItem(Config.blogger.flashNews);
  }

  async getParafiada() {
    return this.getItem(Config.blogger.parafiadaKey);
  }

  async getBibleGroup() {
    return this.getItem(Config.blogger.bibleMeetingKey);
  }

  handleResponse(response) {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }

    return response.json();
  }
}

export default new BlogService();
