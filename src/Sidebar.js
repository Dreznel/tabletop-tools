import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/hp-tracker",
    sidebar: () => <div>hp-tracker</div>,
    main: () => <h2>hp-tracker</h2>
  }
];

const TabletopToolsSidebar = () => (
  <Router>
    <div style={{ display: "flex" }}>
      <div
        style={{
          padding: "10px",
          width: "40%",
          background: "#f0f0f0"
        }}
      >
        <ul style={{ listStyleType: "none", padding: 0}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hp-tracker">HP Tracker</Link>
          </li>
        </ul>

        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.siebar}
          />
        ))}
      </div>
    </div>
  </Router>
);

export default TabletopToolsSidebar;
