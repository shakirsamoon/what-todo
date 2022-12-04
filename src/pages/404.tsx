import { NextPage } from "next";
import styles from '@styles/notfound/NotFound.module.css';
import Link from "next/link";
import Meta from "@components/common/Meta";

/**
 *  Layout for the 404 Not Found page
 * 
*/
const NotFound: NextPage = () => {
  return (
    <>
      <Meta title="404 Not Found - Next.js Todo Application" />
      <div className={styles.container}>
        <h1>404 Not found</h1>
        <p>Sorry, the page that you are looking for does not exist.</p>
        <Link href='/' className={styles.go_home} passHref>Go Home</Link>
      </div>
    </>
  );
}

export default NotFound;