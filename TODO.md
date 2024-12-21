### **Checklist: Front-End Developer Assessment Task**

#### **Project Overview**

- [ ] Build a financial dashboard application with multiple views.
- [ ] Ensure responsive design and functionality as per Figma link.
- [ ] Display an overview of financial activities, card details, transactions, statistics, and user settings.

---

#### **Pages and Key Components**

##### **Dashboard Page (Overview)**

- **My Cards Section**
  - [x] Display multiple card details with balance, cardholder name, and partially masked card number.
  - [x] Include a "See All" button for full list navigation.
- **Recent Transactions**
  - [x] Show a list of recent transactions with an icon, description, date, and amount (positive/negative).
- **Weekly Activity Chart**
  - [x] Bar chart showing daily deposit and withdrawal activities for the week.
- **Expense Statistics**
  - [x] Pie chart displaying expense breakdown by categories (e.g., Entertainment, Bill Expenses, Investments, Others).

##### **Quick Transfer**

- [x] Display a list of frequent transfer contacts with profile pictures, names, and roles.
- [x] Allow input of transfer amount.
- [x] Provide a "Send" button for initiating transfers (UI Only).

##### **Balance History Chart**

- [x] Line chart representing the balance trend over past months.

##### **Settings Page**

- **Tabs**
  - [ ] Include "Edit Profile," "Preference," and "Security" tabs.
- **Edit Profile Section**
  - [ ] Allow editing fields (Name, Username, Email, Password, Date of Birth, Present Address, Permanent Address, City, Postal Code, Country).
  - [ ] Enable profile picture upload/editing.
  - [ ] Provide a "Save" button to apply changes.

---

#### **Functional Requirements**

- **Responsive Design**
  - [x] Ensure responsiveness across mobile, tablet, and desktop.
- **Data Visualization**
  - [x] Use a library like Chart.js or D3.js for dynamic, interactive charting.
  - [x] Ensure charts dynamically update based on user data.
- **Interactive Elements**
  - [ ] Add hover effects and click feedback for buttons ("See All," "Send," "Save").
  - [ ] Make card and transaction lists scrollable for multiple entries.
- **Form Validations**
  - [ ] Implement validation for settings page (e.g., email format, password complexity).
- **User Experience**
  - [ ] Provide smooth transitions between sections and tabs.
  - [ ] Use consistent icons for visual hierarchy.

---

#### **Technical Requirements**

- **Frameworks/Libraries**
  - [x] Use React.js as the primary framework.
  - [ ] Implement state management with Redux or Context API.
  - [x] Use TailwindCSS or styled-components for styling.
- **API Integration**
  - [x] Mock dummy API endpoints for user information, card details, transaction history, and chart data.
- **Routing**
  - [x] Use React Router for navigation between "Dashboard" and "Settings" pages.
- **Charting Library**
  - [x] Use Chart.js, D3.js, or a similar library for charts.
- **Version Control**
  - [x] Maintain the project in a Git repository with a clean branching strategy.

---

#### **Non-Functional Requirements**

- **Performance**
  - [ ] Optimize the application for performance (e.g., lazy loading components).
- **Accessibility**
  - [ ] Adhere to basic accessibility standards (ARIA labels, keyboard navigation).
- **Browser Compatibility**
  - [ ] Ensure compatibility with Chrome, Firefox, Safari, and Edge.

---

#### **Submission Guidelines**

- [ ] Provide a link to the Git repository with the source code.
- [ ] Include a README file with setup instructions and assumptions.
- [ ] Ensure the application can be deployed locally with minimal setup.
- [ ] Provide a Vercel live demo link for the website.

---

This checklist ensures all project requirements are met systematically.

# observações

- algumas medidas do layout no figma possuem valores que nao sao multiplos de 8, causando um "desconforto" visual a longo prazo
  uma melhoria pertinente seria repassarp por esses valores
- outra melhoria seria considerar mapear todos as cores da aplicação e ter definido no figma para evitar o uso de cores soltas
- pelo minha disponibilidade de tempo, eu to usando mock diretamente no código, mas em um universo ideal, eu usaria um msw (preferencialmente) ou json-server para mockar ter acesso aos estados de loading da aplicação 🤝
