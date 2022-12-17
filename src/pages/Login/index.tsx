import React from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
  return <div className={cx('login')}>로그인 페이지</div>;
}

export default Login;
