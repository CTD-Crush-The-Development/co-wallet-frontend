import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { ReactComponent as IconCat } from '../../../assets/svg/icon_cat.svg';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx('footer')}>
      <div className={cx('logo')}>
        <IconCat width="30" height="30" />
        <span className={cx('text')}>Blackcat</span>
      </div>
      <div className={cx('copyright')}>ⓒ 2022 Blackcat Inc.</div>
    </footer>
  );
}

export default Footer;
