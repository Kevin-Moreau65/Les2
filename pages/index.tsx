import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Villa from '../components/Villa/villa'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span style={{color:"#e4dbd3"}}>Les2!</span>
        </h1>
        <div className={styles.grid}>
          <Villa name='Villa "Stark"' prix={10_000_000} adresse="Malibu, California" photo="https://i.pinimg.com/originals/f1/7a/09/f17a09db50bc69d3ae1708b1bf2ccb87.png"/>
          <Villa name='Villa "The One"' prix={1_500_000} adresse="Bel Air, Los Angeles" photo="https://4.bp.blogspot.com/-B6ruhrpXKbc/XxnadnE49qI/AAAAAAAB-FY/X_oEH6JHPb0M0TFnqK2WIizR0KvrHCsWwCLcBGAsYHQ/s1600-rw/23%2BPhotos%2Bvs.%2B%2524500%252C000%252C000%2B%2BBel%2BAir%2BMega%2BMansion%2B%2BLos%2BAngeles%2B-%2BLuxury%2BHome%2B%2526%2BInterior%2BDesign%2BTour%2B%25281%2529.PNG"/>
          {/* <Villa name="villa10"/>
          <Villa name="villa10"/>
          <Villa name="villa10"/>
          <Villa name="villa10"/> */}
        </div>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          {/* <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Villa 1 &rarr;</h2>
            <img className={styles.img} src="https://i.pinimg.com/originals/f1/7a/09/f17a09db50bc69d3ae1708b1bf2ccb87.png"></img>
          </a> */}

          {/* <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Villa 2 &rarr;</h2>
            <img className={styles.img} src="https://i.pinimg.com/originals/f1/7a/09/f17a09db50bc69d3ae1708b1bf2ccb87.png"></img>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Villa 3 &rarr;</h2>
            <img className={styles.img} src="https://i.pinimg.com/originals/f1/7a/09/f17a09db50bc69d3ae1708b1bf2ccb87.png"></img>
          </a> */}

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
