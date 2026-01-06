import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "../root"
import { Cooperation } from "../../pages/cooperation/Cooperation"

export const cooperationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cooperation",
  component: Cooperation,
})
