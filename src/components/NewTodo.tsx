import { NextPage } from 'next';
import { useState } from 'react';
import { createTodo } from '@api/todo.api';
import { useTodoData } from '@store/TodoData.Context';
import styles from '@styles/NewTodo.module.css';

/**
 * Form to add new `Todo` 
 * 
 * 
 * @param {changeVisibility} Function Lets you to change the visibility of the form
 * @param {visible} boolean Shows the visibility of the form
*/
const NewTodo: NextPage<{ changeVisibility: Function, visible: boolean }> = ({ changeVisibility, visible }) => {
  const { refreshTodos } = useTodoData();
  const [isLoading, setIsLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submit = async (e: any) => {
    e.preventDefault();

    if (title != "") {
      setIsLoading(true);
      const data = { title, body, status: false }
      const res = await createTodo(data);
      cancel();
      changeVisibility();
      refreshTodos();
      setIsLoading(false);
    }
  }

  const cancel = () => {
    changeVisibility();
    setTitle("");
    setBody("");
  }

  return (
    <form className={`${styles.newTodo} ${visible ? styles.visible : ``}`} onSubmit={submit}>
      <p>+ new</p>
      <input type="text" name="title" placeholder='Title here..' className={styles.textbox} value={title} onChange={(e) => setTitle(e.target.value)} maxLength={50} />
      <textarea name="body" placeholder='Body here (optional)' className={styles.textbox} value={body} onChange={(e) => setBody(e.target.value)} maxLength={80}></textarea>
      <div className={styles.button_bar}>
        <button className={styles.cancel_button} onClick={cancel}>Cancel</button>
        <button className={styles.submit_button} type="submit">Submit</button>
      </div>
      {isLoading && <div className={styles.loading_form}></div>}
    </form>
  );
}

export default NewTodo;