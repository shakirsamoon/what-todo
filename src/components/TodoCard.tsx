import { NextPage } from "next";
import { useState } from "react";
import ITodoProps from "@props/todo.props";
import { deleteTodo, updateTodo } from "@api/todo.api";
import { useTodoData } from "@store/TodoData.Context";
import styles from '@styles/TodoCard.module.css';

/**
 * Layout for the single `Todo`
 *
 * @param {todo} ITodoProps `Todo` data
 */
const TodoCard: NextPage<{ todo: ITodoProps }> = ({ todo }) => {
  const { refreshTodos } = useTodoData();
  const [isLoading, setIsLoading] = useState(false);

  const changeStatus = async (value: boolean) => {
    setIsLoading(true);
    const res = await updateTodo(todo._id, value);
    refreshTodos();
  }

  const remove = async () => {
    setIsLoading(true);
    const res = await deleteTodo(todo._id);
    refreshTodos();
  }

  return (
    <div className={styles.card}>
      <p className={styles.title}>{todo.title}</p>
      <p className={styles.body}>{todo.body ?? ''}</p>
      <div className={styles.button_bar}>
        <button onClick={remove}>remove ❌</button>
        {todo.status && <button onClick={() => changeStatus(false)}>undone ↩</button>}
        {!todo.status && <button onClick={() => changeStatus(true)}>done ✔</button>}
      </div>
      {isLoading && <div className={styles.loading_card}></div>}
    </div>
  );
}

export default TodoCard;