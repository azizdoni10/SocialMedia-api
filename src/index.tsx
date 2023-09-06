import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import "./styles/base.scss";
import reportWebVitals from './reportWebVitals';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import { GlobalStyle } from './theme/globalStyle';
import { LoginInput } from './components/LoginInput/LoginInput';
import { Provider } from 'react-redux';
import {store} from "./store/store"
import { MainPage } from './pages/MainPage/MainPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />
  },
  {
    path: '/registration',
    element: <LoginInput />
  },
  {
    path: '/main',
    element: <MainPage />
  },
  {
    path: '/profile',
    element: <ProfilePage />
  }
  
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
  </React.StrictMode>
);

reportWebVitals();
