# Employee Directory – React (Class Components)

A simple **Employee Records Dashboard** built with React class components.  
It demonstrates **reusable components**, **props & state management**, **conditional rendering**, and **dynamic lists**.  
The UI displays employee records in clean cards with filtering by department.

---

## 📂 Project Structure

employee-directory/
│
├── public/
│ └── index.html
│
├── src/
│ ├── data/
│ │ └── employeesData.js # Employee dataset (12 sample employees)
│ │
│ ├── components/
│ │ ├── Employee.js # Reusable Employee card component
│ │ └── Employee.css # Styling for employee cards
│ │
│ ├── App.js # Main application (class component)
│ ├── App.css # Styles for app layout
│ ├── index.js # Entry point
│ └── index.css # Global styles
│
└── package.json

- Built with **React class components** (not hooks).
- **Reusable Employee card component** that displays:
  - Avatar
  - Name & Designation
  - Age, Department, Salary, Location
- **Department Filter Buttons** (IT, HR, Finance, Marketing, All).
- **Conditional Rendering**: shows a message if no employees exist in the selected department.
- **Responsive Layout** using CSS Grid for employee cards.
  
<h1>Employees are stored in src/data/employeesData.js with the following fields:<h1/> <br>

<p>id (unique number) </p><br>
<p>name </p><br>
<p>age</p><br>
<p>department (IT, HR, Finance, Marketing</p>)<br>
<p>designation</p><br>
<p>salary</p><br>
<p>location</p><br>
<p>avatar (emoji used as placeholder</p>)<br>
<p>cardColor (background for card</p>)<br>
