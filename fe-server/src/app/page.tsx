import Image from 'next/image'
import styles from './page.module.css'
import { EVSearch } from './component/search'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={120}
              height={57}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/nevo.svg"
          alt="nevo Logo"
          width={240}
          height={114}
          priority
        />
      </div>

      <div className={styles.search}>
        <EVSearch></EVSearch>
      </div>

    </main>
  )
}
