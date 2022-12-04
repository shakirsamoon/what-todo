import mongoose from "mongoose";

const { DB_URI } = process.env;

/**
 * Mongo database connection is initialized here.
 *
 */
const connect = async () => {
  const conn = await mongoose
    .connect(DB_URI as string)
    .catch((err) => console.log(err));
  // console.log("Mongoose Connection Established");

  // Initialize `Todo` schema
  const TodoSchema = new mongoose.Schema(
    {
      title: String,
      body: String,
      status: Boolean,
    },
    { timestamps: true }
  );

  const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema);

  return { conn, Todo };
};

export default connect;
