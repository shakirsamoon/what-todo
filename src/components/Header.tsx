import { NextPage } from 'next';
import styles from '@styles/Header.module.css';
import NewTodo from '@components/NewTodo';
import { useState } from 'react';

/**
 * Layout of the Header
 *
 */
const Header: NextPage = () => {
  const [formVisibility, setFormVisibility] = useState(false);

  const changeVisibility = () => {
    setFormVisibility(!formVisibility);
  }

  return (
    <header className={styles.header}>
      <div className={styles.header_top}>
        <span className={styles.header_w1}>what</span>
        <span className={styles.header_w2}>Todo!</span>
        <button className={styles.add_new} onClick={changeVisibility}>
          ➕<span className={styles.xl}> new</span>
        </button>
      </div>

      <div className={`${styles.add_new_block} ${formVisibility ? styles.visible : ``}`}>
        <NewTodo changeVisibility={changeVisibility} visible={formVisibility} />
      </div>
    </header>
  );
}

export default Header;