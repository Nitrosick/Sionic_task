import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Footer } from './components/Footer/Footer';

import { Cart } from './pages/Cart/Cart';
import { Delivery } from './pages/Delivery/Delivery';
import { Error } from './pages/Error/Error';
import { History } from './pages/History/History';
import { Products } from './pages/Products/Products';

export const App: FC = () => {
  const request = async (url: string) => {
    let response = await fetch(url);

    if (response.ok) {
      let data = await response.json();
      return data;
    } else {
      return null;
    }
  };

  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/history" element={<History />} />
          <Route path="/" element={<Products request={request} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
