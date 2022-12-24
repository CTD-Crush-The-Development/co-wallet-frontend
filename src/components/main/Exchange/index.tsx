import React from 'react';
import classNames from 'classnames/bind';
import styles from './Exchange.module.scss';
import Button from '../../common/Button';

const cx = classNames.bind(styles);

function Exchange() {
  return (
    <div className={cx('container')}>
      <h2 className={cx('title')}>내 거래소</h2>
      <ExchangeList />
      <div className={cx('wrapper')}>
        <Button text="거래소 등록 하기" />
      </div>
    </div>
  );
}

function ExchangeList() {
  return (
    <ul className={cx('list')}>
      <ExchangeItem name="업비트" url="https://upbit.com/home" />
    </ul>
  );
}

function ExchangeItem(props: { name: string; url: string }) {
  const { name, url } = props;

  return (
    <li className={cx('item')}>
      <a href={url} className={cx('link')}>
        {name}
      </a>
    </li>
  );
}

export default Exchange;
