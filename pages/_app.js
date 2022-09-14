import { useEffect, useState } from 'react';
import '../styles/globals.css'
import { StateContext } from '../context/StateContext'

function MyApp({ Component, pageProps }) {
  const [isSSR, setIsSSR] = useState(true);

	useEffect(() => {
		setIsSSR(false);
	}, []);

  if(isSSR) return null
  return (
    <StateContext>
      <Component {...pageProps} />
    </StateContext>
  ) 
}

export default MyApp
