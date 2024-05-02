import { rest } from "msw";

export const handle = [
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { name: "kamal" },
        { name: "Tomal" },
        { name: "Abul" },
        { name: "Sojib" },
      ])
    );
  }),
];
