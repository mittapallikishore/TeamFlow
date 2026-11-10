import './AppLayout.css';
import { Link, Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className="app-layout">
      <header className="app-header">
        <div className="app-logo">
          <h2>TeamFlow</h2>
        </div>

        <nav className="app-navigation">
          <Link to="/projects">Projects</Link>
        </nav>
      </header>

      <main className="app-content">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;