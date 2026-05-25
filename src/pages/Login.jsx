import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthProvider';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const auth = useAuth();
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await auth.login(username, password);
      nav('/');
    } catch (err) {
      setError('Invalid username or password.');
    }
  };

  return (
    <section className="panel page-panel login-panel">
      <div className="login-grid">
        <div className="login-copy">
          <div className="eyebrow">Secure Access</div>
          <h2>Sign in to save your progress.</h2>
          <p>Use your credentials to unlock quiz scoring, progress tracking, and exclusive challenge features.</p>
        </div>

        <div className="login-card">
          <div className="login-card-header">
            <h3>Welcome back</h3>
            <p>Enter your username and password to continue.</p>
          </div>
          <form onSubmit={submit} className="login-form">
            <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
            <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            {error && <div className="feedback error">{error}</div>}
            <button className="primary-button" type="submit">Sign in</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
