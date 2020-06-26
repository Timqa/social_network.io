import React from 'react';

import style from './InputMessage.module.css';

export const InputMessage = () => {
  return (
    <div className={style.windowMessage}>
      <div className={style.inputMessage}>
        <div contentEditable="true" aria-multiline="true" className={style.inputArea}></div>
      </div>
    </div>
  );
};
