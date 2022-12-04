/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import Link from 'next/link';
import styles from '@styles/common/GithubLink.module.css';

/**
 * Github link for this repository
 *
 */
const GithubLink: NextPage = () => {
  return (
    <Link href='https://github.com/shakirsamoon/what-todo.git' target="_blank" className={styles.github_link} passHref>
      <img src="/images/github-logo.png" alt="github logo" />
      <div className={styles.tag}>
        <span>Checkout on</span>
        <p>Github!</p>
      </div>
    </Link>
  );
}

export default GithubLink;