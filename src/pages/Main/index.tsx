import React from 'react';
import classNames from 'classnames/bind';
import styles from './Main.module.scss';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { pagePathAtom } from '../../recoil/atom/pagePathAtom';
import { useRecoilValue } from 'recoil';
import { Coin, Exchange } from '../../components/main';

const cx = classNames.bind(styles);

function Main() {
  const pagePath = useRecoilValue(pagePathAtom);

  return (
    <div className={cx('main')}>
      <Header />
      <div className={cx('container')}>
        {pagePath === '/' && <Coin />}
        {pagePath === '/exchange' && <Exchange />}
      </div>
      <Footer />
    </div>
  );
}

export default Main;
