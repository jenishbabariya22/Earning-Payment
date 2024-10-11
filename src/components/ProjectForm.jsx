import { useState } from 'react';

const ProjectForm = ({ addProject }) => {
  const [projectName, setProjectName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('active');

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject({ name: projectName, dueDate, status });
    setProjectName('');
    setDueDate('');
    setStatus('active');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Project Name</label>
        <input
          type="text"
          className="form-control"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Due Date</label>
        <input
          type="date"
          className="form-control"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Status</label>
        <select
          className="form-select"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Add Project</button>
    </form>
  );
};

export default ProjectForm;
