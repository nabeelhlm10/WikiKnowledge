import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

function Quizzes() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    api.getQuizzes().then(setQuizzes).catch(() => setQuizzes([]));
  }, []);

  return (
    <section className="panel page-panel">
      <div className="panel-header">
        <div>
          <h2>Quiz Arena</h2>
          <p>Choose a quiz and sharpen your skills with bite-sized challenges built for fast wins.</p>
        </div>
      </div>

      <div className="grid-list quiz-grid">
        {quizzes.map(quiz => (
          <Link key={quiz.id} to={`/quizzes/${quiz.id}`} className="card-link">
            <article className="content-card quiz-card quiz-highlight">
              <div className="card-pill">Quiz</div>
              <h3>{quiz.title}</h3>
              <p>{quiz.questions.length} questions • instant scoring</p>
              <div className="card-footer">
                <span>Play now</span>
                <span>Fresh each time</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Quizzes;
