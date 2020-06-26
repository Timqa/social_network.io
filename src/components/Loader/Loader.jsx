import React from 'react';
import style from './Loader.module.css'

export const Loader = () => {
  return (
    <div>
      <div className={style.ldsRing}>
        <div/>
        <div/>
        <div/>
        <div/>
      </div>
    </div>
  );
}
