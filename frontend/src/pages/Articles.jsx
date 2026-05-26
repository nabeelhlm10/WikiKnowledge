import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const TAGS = ['Interactive', 'Beginner', 'Quick Read', 'Deep Dive', 'Tips'];

function Articles() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    api.getArticles().then(setArticles).catch(() => setArticles([]));
  }, []);

  const filtered = useMemo(() => {
    return articles.filter(article => article.title.toLowerCase().includes(query.toLowerCase()));
  }, [articles, query]);

  return (
    <section className="panel page-panel">
      <div className="panel-header">
        <div>
          <h2>Article Library</h2>
          <p>Browse the most recent or most useful learning articles with simple search and category chips.</p>
        </div>
        <input
          type="search"
          placeholder="Search articles..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>

      <div className="tag-row">
        {TAGS.map(tag => (
          <button key={tag} type="button" className="tag-button">{tag}</button>
        ))}
      </div>

      <div className="grid-list article-grid">
        {filtered.map(article => (
          <Link key={article.id} to={`/articles/${article.id}`} className="card-link">
            <article className="content-card article-card">
              <div className="card-pill">Article</div>
              <h3>{article.title}</h3>
              <p>{article.content.slice(0, 140)}…</p>
              <div className="card-footer">
                <span>Read time 3 min</span>
                <span>{Math.min(6, Math.max(1, Math.round(article.content.length / 120)))} min</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Articles;
