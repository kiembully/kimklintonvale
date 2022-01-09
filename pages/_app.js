import Layout from '../components/layout';
import '../styles/global.scss'
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

function getLibrary(provider) {
  return new Web3(provider)
}

const App = ({ Component, pageProps }) => {
    return (
        <Layout pageMeta={{}}>
           <Web3ReactProvider getLibrary={getLibrary}>
            <Component {...pageProps} />
           </Web3ReactProvider>
        </Layout>
    );
}

export default App;