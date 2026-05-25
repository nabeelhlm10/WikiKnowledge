import { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api';

function QuizPage() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    api.getQuiz(id).then(setQuiz).catch(() => setQuiz(null));
    setAnswers([]);
    setResult(null);
    setError('');
  }, [id]);

  const isReady = useMemo(() => {
    return quiz && quiz.questions.every((q, index) => answers[index] != null);
  }, [quiz, answers]);

  const handleOption = (questionIndex, value) => {
    const updated = [...answers];
    updated[questionIndex] = value;
    setAnswers(updated);
  };

  const handleSubmit = async () => {
    if (!quiz) return;
    try {
      const response = await api.submitQuiz(id, answers.map(v => (v == null ? -1 : v)));
      setResult(response);
      setError('');
    } catch (err) {
      setError('Unable to submit quiz. Please sign in if required.');
    }
  };

  if (!quiz) {
    return (
      <section className="panel page-panel">
        <p>Loading quiz…</p>
      </section>
    );
  }

  return (
    <section className="panel page-panel quiz-panel">
      <div className="panel-header quiz-header">
        <div>
          <h2>{quiz.title}</h2>
          <p>Answer each question and submit to see your score instantly.</p>
        </div>
        <Link className="secondary-button" to="/quizzes">Back to quizzes</Link>
      </div>

      <div className="quiz-progress">
        <span>{answers.filter(a => a != null).length} / {quiz.questions.length} answered</span>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${(answers.filter(a => a != null).length / quiz.questions.length) * 100}%` }} />
        </div>
      </div>

      <div className="quiz-list">
        {quiz.questions.map((question, index) => (
          <div key={index} className="question-card">
            <div className="question-title">
              <span>Q{index + 1}</span>
              <p>{question.questionText}</p>
            </div>
            <div className="option-grid">
              {question.options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  type="button"
                  className={answers[index] === optionIndex ? 'option selected' : 'option'}
                  onClick={() => handleOption(index, optionIndex)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {error && <div className="feedback error">{error}</div>}
      {result && (
        <div className="feedback success">
          <strong>{result.score} / {result.total}</strong> correct answers
        </div>
      )}
      <button className="primary-button" onClick={handleSubmit} disabled={!isReady}>Submit Quiz</button>
    </section>
  );
}

export default QuizPage;
