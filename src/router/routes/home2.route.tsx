import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "../root"
import { Home2 } from "../../pages/home2/Home2"

export const home2Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/home2",
  component: Home2,
})
