import styles from './header.module.scss'
import Link from 'next/link'

export default function Header() {

  return (
    <main className={styles.container}>
      <Link href='/'>
        <a>
          <img src="/Logo.svg" alt="logo" />
        </a>
      </Link>
    </main>
  )
}
