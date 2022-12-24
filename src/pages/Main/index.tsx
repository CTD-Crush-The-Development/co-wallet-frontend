import React from 'react';
import classNames from 'classnames/bind';
import styles from './Main.module.scss';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { exampleState } from '../../recoil/selector/example';
import { useRecoilValue } from 'recoil';
import { Exchange } from '../../components/main';

const cx = classNames.bind(styles);

function Main() {
  const result = useRecoilValue(exampleState);
  console.log(result);

  return (
    <div className={cx('main')}>
      <Header />
      <div className={cx('container')}>
        <Exchange />
      </div>
      <Footer />
    </div>
  );
}

export default Main;
