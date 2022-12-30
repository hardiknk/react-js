import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TextForm from './components/TextForm';
import ErrorPage from './components/ErrorPage';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Abouta from './components/Abouta';


const root = ReactDOM.createRoot(document.getElementById('root'));

const allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: 'about-us',
        element: <About />
      },
    ],
  },

]);
root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();