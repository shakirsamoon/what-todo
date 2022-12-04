import connect from "@util/connection.util";

/**
 * Server side actions
 *
 */

export const getAllTodos = async () => {
  const { Todo } = await connect();
  return await Todo.find({});
};

export const createTodo = async (todo: any) => {
  const { Todo } = await connect();
  return await Todo.create(todo);
};

export const updateTodo = async (id: string, status: boolean) => {
  const { Todo } = await connect();
  return await Todo.findByIdAndUpdate(id, { $set: { status } }, { new: true });
};

export const deleteTodo = async (id: string) => {
  const { Todo } = await connect();
  return await Todo.findByIdAndRemove(id);
};
