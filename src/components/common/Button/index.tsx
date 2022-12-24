import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button(props: { text: string; onClick?: () => void }) {
  const { text, onClick } = props;

  return (
    <button type="button" className={cx('button')} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
