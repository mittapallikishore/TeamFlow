import './ProjectListPage.css';

function ProjectListPage() {
  return (
    <main className="projects-page">
      <div className="projects-heading">
        <div>
          <h1>Projects</h1>
          <p className="projects-description">
            View and manage your TeamFlow projects.
          </p>
        </div>
      </div>

      <section className="project-card">
        <h2>Project List</h2>
        <p>
          Project information will appear here once the backend API
          is connected.
        </p>
      </section>
    </main>
  );
}

export default ProjectListPage;