import { createContext, FunctionComponent, PropsWithChildren, useContext, useEffect, useState } from "react";
import ITodoProps from '@props/todo.props';
import { getAllTodos } from "@api/todo.api";

interface ITodoDataContextProps {
  isLoading: boolean;
  doneTodos: ITodoProps[];
  undoneTodos: ITodoProps[];
  refreshTodos: Function;
}

/**
 * `TodoData` context which shares across the application
 *
 * @param {isLoading} boolean Keep the initial status of is data loading
 * @param {doneTodos} array of `Todos` Keeps track of finished todos
 * @param {undoneTodos} array of `Todos` Keeps track of unfinished todos
 * @param {refreshTodos} function Reloads `Todo` data
 */
const TodoDataContext = createContext<ITodoDataContextProps>({
  isLoading: false,
  doneTodos: [],
  undoneTodos: [],
  refreshTodos: Function
});

export const useTodoData = () => useContext(TodoDataContext);

interface ITodoDataProviderProps extends PropsWithChildren { }

const TodoDataProvider: FunctionComponent<ITodoDataProviderProps> = ({ children }) => {
  const [undoneTodos, setUndoneTodos] = useState<ITodoProps[]>([]);
  const [doneTodos, setDoneTodos] = useState<ITodoProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const refreshTodos = async () => {
    const data: ITodoProps[] = await getAllTodos() as ITodoProps[];

    if (data && data.length != 0) {
      const dones = data.filter(todo => todo.status);
      const undones = data.filter(todo => !todo.status);

      setDoneTodos(dones);
      setUndoneTodos(undones);
    } else {
      setDoneTodos([]);
      setUndoneTodos([]);
    }

    if (isLoading !== false) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    refreshTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TodoDataContext.Provider value={{ doneTodos, undoneTodos, isLoading, refreshTodos }}>
      {children}
    </TodoDataContext.Provider>
  );
}

export default TodoDataProvider;