import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import routes from '~pages';

function App() {

  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
