import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "../root"
import { TechnicalSupport } from "../../pages/technical-support/TechnicalSupport"

export const technicalSupportRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/technical-support",
  component: TechnicalSupport,
})
