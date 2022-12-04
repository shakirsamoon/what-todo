import { FunctionComponent, PropsWithChildren } from "react";
import styles from '@styles/common/Layout.module.css';
import GithubLink from "@components/common/GithubLink";
import Meta from "@components/common/Meta";

interface ILayoutProps extends PropsWithChildren { }

/**
 * This is the main layout for the `App`
 *
 * 
 * @param {children} App right side layout.
*/
const Layout: FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Meta />
      <div className={styles.wrapper}>
        {children}
      </div>
      <GithubLink />
    </>
  );
}

export default Layout;