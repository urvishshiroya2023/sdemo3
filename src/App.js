import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';
import Body from './Components/Body';
import Products from './Components/Products';


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Products />
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
