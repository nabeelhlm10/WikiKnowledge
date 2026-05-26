import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Quizzes from './pages/Quizzes';
import QuizPage from './pages/QuizPage';
import Games from './pages/Games';
import Login from './pages/Login';
import { AuthProvider, useAuth } from './AuthProvider';

function App() {
  return (
    <AuthProvider>
      <div className="app-shell">
        <Header />
        <main className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<ArticleDetail />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/quizzes/:id" element={<QuizPage />} />
            <Route path="/games" element={<Games />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <footer className="footer">
          <div>Powered by React, Spring Boot, and MongoDB.</div>
          <div>Login to save your progress and compete in challenges.</div>
        </footer>
      </div>
    </AuthProvider>
  );
}

function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="topbar">
      <div className="branding">
        <div className="brand-icon">WK</div>
        <div>
          <div className="brand">WikiKnowledge</div>
          <div className="brand-tag">Learn faster. Play smarter.</div>
        </div>
      </div>

      <nav className="nav-links">
        <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/" end>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/articles">Articles</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/quizzes">Quizzes</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/games">Games</NavLink>
      </nav>

      <div className="account-actions">
        {user ? (
          <>
            <span className="user-badge">{user}</span>
            <button className="secondary-button" onClick={logout}>Logout</button>
          </>
        ) : (
          <NavLink className="login-link" to="/login">Sign In</NavLink>
        )}
      </div>
    </header>
  );
}

export default App;
