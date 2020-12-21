import React from 'react';
import { footerDetails } from '../../data';

export default function Footer({}) {
  return (
      <footer class='h-60 bg-blue-500'>
        <div className='flex justify-around content-center'>
          <div className='flex justify-center'> logo </div>
          <div className='flex justify-evenly'>
            <div className='flex flex-col content-around mx-2'>
              <p>{footerDetails.secondMenu}</p>
              <hr/>
              <ul>
                {footerDetails.secondValues.map((it) => (
                  <li>{it}</li>
                ))}
              </ul>
            </div>
            <div className='flex flex-col content-around mx-2'>
              <p>{footerDetails.thirdMenu}</p>
              <hr/>
              <ul>
                {footerDetails.thirdValue.map((it) => (
                  <li>{it}</li>
                ))}
              </ul>
            </div>
            <div className='flex flex-col content-around mx-2'>
              <p>{footerDetails.fourthMenu}</p>
              <hr/>
              <ul>
                {footerDetails.fourthValue.map((it) => (
                  <li>{it}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-bottom flex justify-between content-center pt-20 pb-0 mb-0 w-100'>
          <div className='flex justify-center'>© Life Chef 2021. All rights reserved</div>
          <div className='flex content-center justify-evenly'>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </footer>
  );
}
