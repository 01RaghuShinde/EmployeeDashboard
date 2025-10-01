import React, { Component } from 'react';
import { employees } from './data/employeesData';
import Employee from './components/Employee';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDept: 'All'
    };
  }

  // Get list of departments including 'All'
  getDepartments() {
    const set = new Set(employees.map(e => e.department));
    return ['All', ...Array.from(set)];
  }

  // Set selected department
  setDept = (dept) => {
    this.setState({ selectedDept: dept });
  }

  // Filter employees based on department
  filteredEmployees = () => {
    const { selectedDept } = this.state;
    if (selectedDept === 'All') return employees;
    return employees.filter(e => e.department === selectedDept);
  }

  render() {
    const depts = this.getDepartments();
    const list = this.filteredEmployees();

    return (
      <div className="app-root">
        <div className="container">
          <h1>Employee Records Dashboard</h1>

          <div className="dept-buttons">
            {depts.map(d => (
              <button
                key={d}
                className={`dept-btn ${this.state.selectedDept === d ? 'active' : ''}`}
                onClick={() => this.setDept(d)}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="employees-grid">
            {list.length > 0 ? (
              list.map(emp => (
                <Employee key={emp.id} employee={emp} />
              ))
            ) : (
              <div className="no-data">No employees found in the <strong>{this.state.selectedDept}</strong> department.</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
