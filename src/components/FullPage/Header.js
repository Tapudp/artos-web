import React from 'react';
import { HeaderDetails } from '../../data';

function Header({ currPage }) {
  return (
    <header className='h-20 grid grid-cols-3 bg-red-500 px-20'>
      <div className='col-span-1 flex flex-row justify-start items-center'>
        <div className='mx-1'>logo</div>
        <div className='mx-1 ml-2'>location</div>
      </div>
      <div className='flex flex-row col-span-1 justify-center items-center'>
        {HeaderDetails.navOptions.map((it) => (
          <div className='mx-1'>{it}</div>
        ))}
      </div>
      <div className='flex flex-row col-span-1 justify-end items-center'>
        <div className='mx-1'>Login</div>
        <div className='mx-1'>Sign up</div>
        <div className='mx-1'>package</div>
      </div>
    </header>
  );
}

export default Header;
