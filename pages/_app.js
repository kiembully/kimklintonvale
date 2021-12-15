import Layout from '../components/layout';
import '../styles/global.scss'

const App = ({ Component, pageProps }) => {
    return (
        <Layout pageMeta={{}}>
            <Component {...pageProps} />
        </Layout>
    );
}

export default App;