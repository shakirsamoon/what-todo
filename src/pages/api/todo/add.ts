import type { NextApiRequest, NextApiResponse } from "next";
import { createTodo } from "@util/actions.util";

/**
 * Add new `Todo` to database
 *
 *
 * @param {title} string Todo ID
 * @param {body} string Body content
 * @param {status} boolean Status
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const result = await createTodo(req.body);
    res.status(200).json({ result: "done" });
  } else {
    res.status(404).json({ error: "Not Found" });
  }
}
