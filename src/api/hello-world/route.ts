import type {
  MedusaRequest,
  MedusaResponse,
} from "@medusajs/framework/http"

export const GET = (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  console.log("This is from the route");
  res.json({
    message: "[GET] Hello world!",
  })
}