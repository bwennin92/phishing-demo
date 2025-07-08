import './Projects.css';

export default function Projects() {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <ul>
        <li>
          <strong>Modern Portfolio</strong> – A responsive React portfolio site (this one!)
        </li>
        <li>
          <strong>Task Tracker App</strong> – Productivity tool with React and Firebase
        </li>
        <li>
          <strong>Weather Dashboard</strong> – Real-time weather app using OpenWeatherMap API
        </li>
      </ul>
    </section>
  );
}
