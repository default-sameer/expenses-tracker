import { Hono } from "hono";
import { expensesRoute } from "./routes/expenses";

const app = new Hono().basePath("/api");

app.get("/", (c) => {
  return c.json({
    message: "Hello From the Dark Side",
  });
});

const apiRoutes = app.route("/expenses", expensesRoute);
export default app;
export type ApiRoutes = typeof apiRoutes;
