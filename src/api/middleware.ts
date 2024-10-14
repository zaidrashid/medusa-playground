import { defineMiddlewares } from "@medusajs/medusa";
import type {
  MedusaNextFunction,
  MedusaRequest,
  MedusaResponse,
} from "@medusajs/framework/http";

export default defineMiddlewares({
  routes: [
    {
      method: "GET",
      matcher: "/hello-world",
      middlewares: [
        (req: MedusaRequest, res: MedusaResponse, next: MedusaNextFunction) => {
          console.log("Received a request!");
          next();
        },
      ],
    },
  ],
});
