import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api';

function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    api.getArticle(id).then(setArticle).catch(() => setArticle(null));
  }, [id]);

  if (!article) {
    return (
      <section className="panel page-panel">
        <p>Loading article…</p>
      </section>
    );
  }

  return (
    <section className="panel page-panel">
      <div className="panel-header">
        <div>
          <h2>{article.title}</h2>
          <p>Deep dive into the latest topics with a polished reading experience.</p>
        </div>
        <Link className="secondary-button" to="/articles">Back to articles</Link>
      </div>

      <article className="detail-card article-detail-card">
        <div className="article-meta">
          <span>Featured Article</span>
          <span>Estimated read: {Math.max(3, Math.round(article.content.length / 120))} min</span>
        </div>
        <p>{article.content}</p>
      </article>
    </section>
  );
}

export default ArticleDetail;
