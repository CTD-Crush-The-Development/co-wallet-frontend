import React from 'react';
import classNames from 'classnames/bind';
import styles from './Main.module.scss';

const cx = classNames.bind(styles);

function Main() {
  return <div className={cx('main')}>메인 페이지</div>;
}

export default Main;
