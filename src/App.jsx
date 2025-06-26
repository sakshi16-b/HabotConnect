import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import { ProviderDetails } from './Pages/ProviderDetails';
import { Provider } from './Pages/Provider';
import { AppLayout } from './Layout/AppLayout';
import ErrorPage from './Pages/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Provider />,
      },
      {
        path: "/providers/:id",
        element: <ProviderDetails />,
      },
    ]
  }
])

const App = () => {

  return (
    <RouterProvider router={router}></RouterProvider>
  )

}

export default App;
