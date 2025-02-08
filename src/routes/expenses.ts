import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { createExpensesSchema } from "../schema/expenses.schema";
import { Expenses } from "../types/expenses.type";

const mockexpenses: Expenses[] = [
  {
    id: "97454b8b-c2c5-4528-8cc6-61ac3a140959",
    title: "Test",
    amount: 200,
  },
];

export const expensesRoute = new Hono()
  .get("/", (c) => {
    return c.json({ expenses: mockexpenses });
  })
  .post("/", zValidator("json", createExpensesSchema), async (c) => {
    const expenses = await c.req.valid("json");
    mockexpenses.push({ ...expenses, id: crypto.randomUUID() });
    c.status(201);
    return c.json({ expenses });
  })
  .get("/:id", (c) => {
    const id = c.req.param("id");
    const expenses = mockexpenses.find((expense) => expense.id === id);
    if (!expenses) {
      return c.notFound();
    }
    return c.json({ expenses });
  })
  .delete("/:id", (c) => {
    const id = c.req.param("id");
    const index = mockexpenses.findIndex((expense) => expense.id === id);
    if (!index) {
      return c.notFound();
    }
    const deleteExpense = mockexpenses.splice(index, 1)[0];
    return c.json({ expense: deleteExpense });
  });
