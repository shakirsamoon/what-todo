import type { NextApiRequest, NextApiResponse } from "next";
import { updateTodo } from "@util/actions.util";

/**
 * Sets done and undone status of the `Todo`
 *
 *
 * @param {todo_id} number Todo ID
 * @param {status} boolean Status of done or not
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    const todo_id = req.query.todo_id as string;
    let status = false;

    if (req.query.status !== "false") {
      status = true;
    }

    const result = await updateTodo(todo_id, status);
    res.status(200).json({ result: "done" });
  } else {
    res.status(404).json({ error: "Not Found" });
  }
}
