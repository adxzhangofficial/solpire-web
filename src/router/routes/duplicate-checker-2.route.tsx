import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "../root"
import { DuplicateChecker2 } from "../../pages/duplicate-checker-2/DuplicateChecker2"

export const duplicateChecker2Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/duplicate-checker-2",
  component: DuplicateChecker2,
})
