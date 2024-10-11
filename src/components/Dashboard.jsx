import { useState } from 'react';
import ProjectForm from './ProjectForm';
import PaymentSection from './PaymentSection';
import ChartComponent from './ChartComponent';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [payments, setPayments] = useState([]);
  const [theme, setTheme] = useState('light'); // Add theme state

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  // Calculate earnings for chart data
  const earningsData = payments.map(payment => payment.amount);

  // Toggle between dark and light themes
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`container ${theme}`}>
      <h1>Dashboard</h1>

      {/* Theme Switcher */}
      <button onClick={toggleTheme} className="btn btn-secondary mb-3">
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>

      <ProjectForm addProject={addProject} />
      <h2>Projects</h2>
      <ul className="list-group">
        {projects.map((project, index) => (
          <li key={index} className="list-group-item">
            {project.name} - Due: {project.dueDate} - Status: {project.status}
            <button onClick={() => updateProject(project)} className="btn btn-warning btn-sm float-end ms-2">Update</button>
            <button onClick={() => deleteProject(project.name)} className="btn btn-danger btn-sm float-end">Delete</button>
          </li>
        ))}
      </ul>
      <ChartComponent earnings={earningsData} />
      <PaymentSection payments={payments} setPayments={setPayments} />
    </div>
  );
};

export default Dashboard;
