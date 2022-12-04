const isHosted = (process.env.HOSTED as string) === "false" ? false : true;

export const HOST_URL = isHosted
  ? (process.env.HOST_URL as string)
  : (process.env.DEV_URL as string);

/**
 * Every API paths
 *
 */
const API_PATHS = {
  GET_ALL_TODOS: `/api/todos`,
  ADD_TODO: `/api/todo/add`,
  UPDATE_TODO_STATUS: (id: string, status: boolean) => `/api/todo/${id}/${status ? `true` : `false`}`,
  DELETE_TODO: (id: string) => `/api/todo/${id}/delete`,
};

export default API_PATHS;
