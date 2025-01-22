import { RouterProvider } from 'react-router-dom';

import { router } from './routes/routes';

function App() {
  console.log(process.env);

  return <RouterProvider router={router} />;
}

export default App;
