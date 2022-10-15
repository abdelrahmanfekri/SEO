import '../styles/globals.css'
import SEO from '../next-seo.config'
import { DefaultSeo, LocalBusinessJsonLd } from 'next-seo'

function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO.meta}></DefaultSeo>
      <LocalBusinessJsonLd {...SEO.businessData}></LocalBusinessJsonLd>
      <Component {...pageProps} />
    </>
  )
}

export default App;
