### Environment Setup and Tools

- [x] Set up a React project (using `create-react-app` or similar).
- [x] Install React Router dependencies (e.g., `react-router-dom`).
- [ ] Install state management dependencies (Redux or Context API).
- [ ] Install a chart library (Chart.js or D3.js).
- [ ] Install a styling library (TailwindCSS, Styled-Components, or another).
- [ ] Set up a Git repository and create the initial branching structure.
- [ ] Create a README file with setup instructions.

### Folder Structure and Components

- [x] Create a `src/components` folder for reusable components.
- [x] Create a `src/pages` folder for pages (Dashboard, Settings).
- [ ] Create a `src/store` folder (for Redux) or `src/context` (for Context API) to handle global state.
- [ ] Create a `src/services` folder for API calls (mocks).
- [ ] Create a `src/assets` folder for images, icons, etc.

### Routing

- [ ] Configure main routes: `/` (Dashboard), `/settings` (Settings).
- [ ] Ensure navigation between pages using React Router.

### Global State and Mock API

- [ ] Create mock data (cards, transactions, chart data, user info).
- [ ] Implement mock fetch functions for endpoints (using static data).
- [ ] Integrate Redux or Context API for managing global state (cards, transactions, user profile, etc.).

### Dashboard Page (Overview)

- [ ] "My Cards" section:
  - [ ] Create a component to display cards with balance, cardholder name, and masked card number.
  - [ ] "See All" button (optional) to navigate to a detailed cards list page.
- [ ] "Recent Transactions" section:
  - [ ] List recent transactions with an icon, description, date, and amount.
  - [ ] Make the list scrollable if there are many transactions.
- [ ] "Weekly Activity Chart" section:
  - [ ] Create a bar chart (Chart.js/D3.js) for daily deposits/withdrawals.
- [ ] "Expense Statistics" (Pie Chart) section:
  - [ ] Create a pie chart with a breakdown by category (Entertainment, Bills, Investments, Others).
- [ ] "Quick Transfer" section:
  - [ ] Display a list of frequent transfer contacts with photo, name, and role.
  - [ ] Input field for transfer amount.
  - [ ] "Send" button (UI only, no real functionality).
- [ ] "Balance History Chart" section:
  - [ ] Create a line chart showing the balance trend over the past few months.

### Settings Page

- [ ] Create tabs: "Edit Profile," "Preference," "Security".
- [ ] "Edit Profile":
  - [ ] Editable fields: Name, Username, Email, Password, Date of Birth, Present Address, Permanent Address, City, Postal Code, Country.
  - [ ] Upload/Change profile picture.
  - [ ] "Save" button to apply changes (UI + state management, no real backend).
- [ ] (Optional) Implement placeholders for "Preference" and "Security" if needed.

### Responsiveness

- [ ] Ensure a responsive layout (mobile, tablet, desktop).
- [ ] Test by resizing the browser window and using mobile devices.

### Interactivity and Visual Feedback

- [ ] Add hover effects on buttons and clickable elements.
- [ ] Provide visual feedback when buttons are clicked ("loading," "clicked," etc., if applicable).
- [ ] Allow scrolling in sections with overflow content (such as the transactions list).

### Form Validation

- [ ] Validate email, password, and other fields on the "Edit Profile" section.
- [ ] Display user-friendly error messages.

### Accessibility

- [ ] Include ARIA attributes and proper labels.
- [ ] Ensure keyboard navigation works properly.

### Performance

- [ ] Implement lazy loading for components (e.g., load charts on-demand).
- [ ] Optimize images (if any).
- [ ] Check overall performance.

### Browser Compatibility

- [ ] Test in Chrome, Firefox, Safari, and Edge.

### Deployment and Documentation

- [ ] Update the README with installation and execution instructions.
- [ ] Deploy to Vercel and include the link in the README.
- [ ] Ensure the application runs locally with minimal steps (npm install, npm start).
