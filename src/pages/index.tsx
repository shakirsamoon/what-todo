import { NextPage } from 'next'
import Header from '@components/Header'
import CardStack from '@components/CardStack'
import styles from '@styles/Home.module.css'
import Meta from '@components/common/Meta'

/**
 *  Layout for the Home page
 * 
*/
const Home: NextPage = () => {
  return (
    <>
      <Meta />
      <Header />
      <main className={styles.content}>
        <CardStack />
      </main>
    </>
  )
}

export default Home;