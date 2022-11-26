import React from 'react';
import { Toaster } from 'react-hot-toast';


import '../styles/globals.css';
import { Layout} from './components';
import { StateContext } from '/Users/olayinka/Desktop/ecommerce/clacha/context/StateContext.js'




function MyApp({ Component, pageProps }) {
  return (
    <StateContext>

      <Layout>
        <Toaster />
        <Component {...pageProps} />

      </Layout>

    </StateContext>
    
      
    

    )
    
}

export default MyApp
