import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "../root"
import { Terms } from "../../pages/terms/Terms"

export const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/terms",
  component: Terms,
})
