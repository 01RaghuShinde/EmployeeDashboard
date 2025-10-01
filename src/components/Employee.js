import './Employee.css';
import React, { Component } from 'react';


class Employee extends Component {
    render() {
        const { employee } = this.props;


        return (
            <div className="employee-card" style={{ backgroundColor: employee.cardColor }}>
                <div className="employee-card-inner">
                    <div className="avatar-square">
                        <div className="avatar">{employee.avatar || '👤'}</div>
                    </div>


                    <h3 className="emp-name">{employee.name}</h3>
                    <p className="emp-designation">{employee.designation}</p>


                    <div className="emp-meta">
                        <div>Age: <strong>{employee.age}</strong></div>
                        <div>Dept: <strong>{employee.department}</strong></div>
                        <div>Salary: <strong>₹{employee.salary.toLocaleString()}</strong></div>
                        <div>Location: <strong>{employee.location}</strong></div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Employee;