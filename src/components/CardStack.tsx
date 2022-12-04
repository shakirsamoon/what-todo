import { NextPage } from "next";
import styles from '@styles/CardStack.module.css';
import TodoCard from "@components/TodoCard";
import { useTodoData } from '@store/TodoData.Context';
import ITodoProps from "@props/todo.props";
import LoadingCard from "@components/LoadingCard";

/**
 * `Todo` cards stacked here
 *
 */
const CardStack: NextPage = () => {
  const { doneTodos, undoneTodos, isLoading } = useTodoData();

  return (
    <>
      <div className={styles.panel}>
        <h2>todos:</h2>
        <div className={styles.card_stack}>
          {
            !isLoading ? (
              undoneTodos.length !== 0 ?
                undoneTodos.map((todo: ITodoProps) => (
                  <TodoCard key={todo._id} todo={todo} />
                )) : <p className={styles.empty}>no todos..</p>
            ) : (
              <>
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
              </>
            )
          }
        </div>
      </div>
      <div className={styles.panel}>
        <h2>done:</h2>
        <div className={styles.card_stack}>
          {
            !isLoading ? (
              doneTodos.length !== 0 ?
                doneTodos.map((todo: ITodoProps) => (
                  <TodoCard key={todo._id} todo={todo} />
                )) : <p className={styles.empty}>no todos..</p>
            ) : (
              <>
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
              </>
            )
          }
        </div>
      </div>
    </>
  );
}

export default CardStack;