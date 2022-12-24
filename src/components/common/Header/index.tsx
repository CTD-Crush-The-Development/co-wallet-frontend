import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { ReactComponent as IconCat } from '../../../assets/svg/icon_cat.svg';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('header')}>
      <div className={cx('inner')}>
        <h1 className={cx('title')}>
          <a href="/" className={cx('link')}>
            <IconCat width="48" height="48" />
            <span className={cx('text')}>Blackcat</span>
          </a>
        </h1>
        <button className={cx('button_menu')}>
          <span className="hidden">메뉴열기</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
