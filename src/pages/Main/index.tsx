import React from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Main.module.scss';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { Coin, Exchange } from '../../components/main';

const cx = classNames.bind(styles);

function Main() {
  const location = useLocation();

  return (
    <div className={cx('main')}>
      <Header />
      <div className={cx('container')}>
        {location.pathname === '/' && <Coin />}
        {location.pathname === '/exchange' && <Exchange />}
      </div>
      <Footer />
    </div>
  );
}

export default Main;
