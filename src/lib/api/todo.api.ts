import API_PATHS from "@constants/api_paths";
import ITodoProps from "@props/todo.props";
import axios from "@util/api.util";

/**
 * Every API calling actions handles here. (Uses Axios for data HTTP requests)
 *
 */

export const getAllTodos = async () => {
  return (
    ((await axios
      .get(API_PATHS.GET_ALL_TODOS)
      .then((res) => res.data.data)) as ITodoProps[]) ?? []
  );
};

export const createTodo = async (data: any) => {
  return await axios
    .post(API_PATHS.ADD_TODO, data)
    .then((res) => res.status === 200);
};

export const updateTodo = async (id: string, status: boolean) => {
  return await axios
    .put(API_PATHS.UPDATE_TODO_STATUS(id, status))
    .then((res) => res.status === 200);
};

export const deleteTodo = async (id: string) => {
  return await axios
    .delete(API_PATHS.DELETE_TODO(id))
    .then((res) => res.status === 200);
};
