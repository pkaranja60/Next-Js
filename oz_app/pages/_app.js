import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../firebase'
import Layout from '../components/Layout'
import Login from './login'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  const [user] = useAuthState(auth);

  if (!user) return <Login />

  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
   
}

export default MyApp
