import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { ReactComponent as IconCat } from '../../../assets/svg/icon_cat.svg';
import useToggle from '../../../hooks/useToggle';
import { Link, useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
  const [openMenu, toggle] = useToggle(false);
  const location = useLocation();

  return (
    <header className={cx('header')}>
      <div className={cx('inner')}>
        <h1 className={cx('title')}>
          <Link to="/" className={cx('link')}>
            <IconCat width="48" height="48" />
            <span className={cx('text')}>Blackcat</span>
          </Link>
        </h1>
        <button aria-pressed={openMenu} onClick={toggle} className={cx('button_menu')}>
          <span className="hidden">메뉴열기</span>
        </button>
        <div className={cx('navigation')}>
          <ul className={cx('list')}>
            <li className={cx('item')}>
              <Link
                to="/"
                aria-current={location.pathname === '/' ? 'page' : undefined}
                onClick={() => {
                  toggle();
                }}
                className={cx('link_sub')}
              >
                내 자산
              </Link>
            </li>
            <li className={cx('item')}>
              <Link
                to="/exchange"
                aria-current={location.pathname === '/exchange' ? 'page' : undefined}
                onClick={() => {
                  toggle();
                }}
                className={cx('link_sub')}
              >
                내 거래소
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
