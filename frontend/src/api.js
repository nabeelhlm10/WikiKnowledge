const api = {
  async fetchJson(path) {
    const response = await fetch(path, { credentials: 'include' });
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
    return response.json();
  },

  getArticles() {
    return this.fetchJson('/api/articles');
  },

  getArticle(id) {
    return this.fetchJson(`/api/articles/${id}`);
  },

  getQuizzes() {
    return this.fetchJson('/api/quizzes');
  },

  getQuiz(id) {
    return this.fetchJson(`/api/quizzes/${id}`);
  },

  submitQuiz(id, answers) {
    return fetch(`/api/quizzes/${id}/submit`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answers })
    }).then(async response => {
      if (!response.ok) {
        const txt = await response.text();
        throw new Error('Unable to submit quiz: ' + response.status + ' ' + txt);
      }
      return response.json();
    });
  }
};

export default api;
