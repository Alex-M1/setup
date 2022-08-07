import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Page404 from '../Page404';

interface IProps {

}

const PageOne = React.lazy(() => import('../Page1'));
const PageTwo = React.lazy(() => import('../Page2'));

const App: React.FC<IProps> = () => (
  <Router>
    <Routes>
      <Route element={<Suspense fallback={<div>Загрузка...</div>}><PageOne /></Suspense>} path="/" />
      <Route element={<Suspense fallback={<div>Загрузка...</div>}><PageTwo /></Suspense>} path="/page2" />
      <Route path="*" element={<Page404 />} />
    </Routes>
  </Router>
);

export default App;
