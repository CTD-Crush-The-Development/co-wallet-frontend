import React from 'react';
import classNames from 'classnames/bind';
import styles from './Coin.module.scss';

const cx = classNames.bind(styles);

function Coin() {
  return (
    <div className={cx('container')}>
      <h2 className={cx('title')}>내 자산</h2>
      <CoinList />
    </div>
  );
}

function CoinList() {
  return (
    <ul className={cx('list')}>
      <CoinItem name="비트코인" value={123} unit="BTC" />
      <CoinItem name="이더리움" value={12} unit="ETC" />
    </ul>
  );
}

function CoinItem(props: { name: string; value: number; unit: string }) {
  const { name, value, unit } = props;

  return <li className={cx('item')}>{`${name} ${value} ${unit}`}</li>;
}

export default Coin;
