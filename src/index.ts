import { Hono } from "hono";
import { expensesRoute } from "./routes/expenses";

const app = new Hono();

app.get("/", (c) => {
  return c.json("Hello Hono!");
});

app.route("/expenses", expensesRoute);
export default app;
