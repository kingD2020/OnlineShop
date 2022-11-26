import React from 'react';
import Link from 'next/link';

import { urlFor } from './lib/client';

const FooterBanner = ({ footerBanner:{ discount, largeText, largeText2, saleTime, smallText, midText, desc, product, buttonText, image}}) => {
    return(
        <div className="footer-banner-container">
            <div className="banner-desc">
                <div className="left">
                    <p>{discount}</p>
                    <h3>{largeText}</h3>
                    <h2>{largeText2}</h2>
                    <p>{saleTime}</p>
                </div>
                

                <img 
                    src={urlFor(image)} className="footer-banner-image"
                    />


               

               
            </div>
        </div>
    )
}

export default FooterBanner