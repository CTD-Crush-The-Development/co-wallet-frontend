import React from 'react';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Exchange.module.scss';
import Button from '../../common/Button';
import { ExchangeModel } from '../../../models/exchange.model';
import { exchangeListState } from '../../../recoil/selector/exchange.list';
import { useRecoilValue } from 'recoil';

const cx = classNames.bind(styles);

function Exchange() {
  const exchangeList = useRecoilValue(exchangeListState);

  return (
    <div className={cx('container')}>
      <h2 className={cx('title')}>내 거래소</h2>
      <ExchangeList exchangeList={exchangeList} />
      <div className={cx('wrapper')}>
        <Button text="거래소 등록 하기" />
      </div>
    </div>
  );
}

function ExchangeList(props: { exchangeList: ExchangeModel[] }) {
  const { exchangeList } = props;

  return (
    <ul className={cx('list')}>
      {exchangeList.map((item, index) => (
        <ExchangeItem {...item} />
      ))}
    </ul>
  );
}

function ExchangeItem(props: ExchangeModel) {
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
