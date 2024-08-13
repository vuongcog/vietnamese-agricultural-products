import classNames from 'classnames';
import React from 'react';

const Icon = ({ icon, stylesWrapper }) => (
  <div
    className={classNames(
      'text-[30px] shrink-0 w-10 h-10 bg-[#d4bd96] flex justify-center items-center rounded-full',
      stylesWrapper
    )}
  >
    {icon}
  </div>
);

export default Icon;
