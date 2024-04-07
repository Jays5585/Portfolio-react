import '../styles/globals.css';
import Head from 'next/head';
import Menu from '../components/Menu';


function App({ Component, pageProps }) {
  return (
    <>
      <Head>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Pacifico&display=swap')

</style>
        <title>Next.js App</title>
        
      </Head>
      <Menu/>
      <Component {...pageProps} />
    </>
  );
}

export default App;
