import React from 'react';
import classNames from 'classnames/bind';
import styles from './Main.module.scss';
import { exampleState } from '../../recoil/selector/example';
import { useRecoilValue } from 'recoil';

const cx = classNames.bind(styles);

function Main() {
  const result = useRecoilValue(exampleState);
  console.log(result);

  return (
    <div className={cx('main')}>
      메인 페이지
      <h1>{result.Hello}</h1>
    </div>
  );
}

export default Main;
