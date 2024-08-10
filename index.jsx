import { BrowserRouter as Router } from 'react-router-dom';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/sidebar", element: <Sidebar /> },
  { path: "/mainpage", element: <Mainpage /> },
  { path: "/item", element: <Item /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router basename="/your-sub-directory">
      <RouterProvider router={router} />
    </Router>
  </React.StrictMode>
);

