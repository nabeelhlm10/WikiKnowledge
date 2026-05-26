import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

function Home() {
  const [articleCount, setArticleCount] = useState(0);
  const [quizCount, setQuizCount] = useState(0);

  useEffect(() => {
    api.getArticles().then(data => setArticleCount(data.length)).catch(() => setArticleCount(0));
    api.getQuizzes().then(data => setQuizCount(data.length)).catch(() => setQuizCount(0));
  }, []);

  return (
    <>
      <section className="hero-card hero-overview">
        <div className="hero-copy">
          <div className="eyebrow">Welcome to WikiKnowledge</div>
          <h1>Learn faster with interactive lessons, challenges, and game‑style quizzes.</h1>
          <p>Explore guided articles, take knowledge quizzes, and keep your brain sharp with visually rich learning tools.</p>
          <div className="hero-actions">
            <Link to="/articles" className="primary-button">Browse Articles</Link>
            <Link to="/quizzes" className="secondary-button">Start a Quiz</Link>
          </div>
        </div>
        <div className="hero-panel">
          <div className="hero-card mini-panel">
            <div>
              <h3>Fast learning stats</h3>
              <p>Track your reading and quiz progress in a single dashboard.</p>
            </div>
            <div className="hero-stats hero-metrics">
              <div>
                <strong>{articleCount}</strong>
                <span>Articles ready</span>
              </div>
              <div>
                <strong>{quizCount}</strong>
                <span>Quiz sets</span>
              </div>
            </div>
          </div>
          <div className="hero-card mini-panel accent-panel">
            <div className="panel-badge">Today</div>
            <strong>Daily challenge</strong>
            <p>Answer 5 questions and beat your last score with a fresh quiz every day.</p>
          </div>
        </div>
      </section>

      <section className="panel spotlight-grid">
        <div className="panel-header">
          <div>
            <h2>Why WikiKnowledge?</h2>
            <p>Explore curated learning paths designed to help you stay engaged, retain more, and improve faster.</p>
          </div>
        </div>
        <div className="grid-list feature-cards">
          <article className="content-card feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Fast reviews</h3>
            <p>Digest key concepts quickly with interactive summaries and quiz-backed reinforcement.</p>
          </article>
          <article className="content-card feature-card">
            <div className="feature-icon">🧠</div>
            <h3>Active learning</h3>
            <p>Make knowledge stick using active recall questions and instant feedback.</p>
          </article>
          <article className="content-card feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Playful practice</h3>
            <p>Turn study time into game time with quiz streaks and a memory match challenge.</p>
          </article>
        </div>
      </section>
    </>
  );
}

export default Home;
