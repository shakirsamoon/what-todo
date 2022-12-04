import type { NextApiRequest, NextApiResponse } from "next";
import { getAllTodos } from "@util/actions.util";

/**
 * Retrieves all `Todos`
 *
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const data = await getAllTodos();
    res.status(200).json({ data: data ?? [] });
  } else {
    res.status(404).json({ error: "Not Found" });
  }
}
