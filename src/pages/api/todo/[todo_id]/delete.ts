import type { NextApiRequest, NextApiResponse } from "next";
import { deleteTodo } from "@util/actions.util";

/**
 * Delete `Todo`
 *
 *
 * @param {title} string Todo ID
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    const todo_id = req.query.todo_id as string;
    const result = await deleteTodo(todo_id);
    res.status(200).json({ result: "done" });
  } else {
    res.status(404).json({ error: "Not Found" });
  }
}
