import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/home/Home.jsx';
import Hotel from './components/hotels/Hotel.jsx';
import AboutUs from './components/About/About.jsx';
import './index.css';
import Layout from './Layout.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Contact from './components/contact/contact.jsx';
import News from './components/news/News.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'hotel',
        element: <Hotel />
      },
      {
        path: 'About-Us',
        element: <AboutUs />
      },
      {
        path: 'Gallery',
        element: <Gallery />
      },
      {
        path: 'Contact',
        element: <Contact />
      },
      {
        path: 'News',
        element: <News/>
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
