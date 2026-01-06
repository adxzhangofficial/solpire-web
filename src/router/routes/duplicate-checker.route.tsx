import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "../root"
import { DuplicateChecker } from "../../pages/duplicate-checker/DuplicateChecker"

export const duplicateCheckerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/duplicate-checker",
  component: DuplicateChecker,
})
