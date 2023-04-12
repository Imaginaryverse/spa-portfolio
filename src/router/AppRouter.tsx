import { Route, Routes } from 'react-router-dom';
import { HomePage, AboutPage, ContactPage } from '@src/pages';
import { Layout } from '@src/styles/Layout';

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage />} />
      </Route>
    </Routes>
  );
};
