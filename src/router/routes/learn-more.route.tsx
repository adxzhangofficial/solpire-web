import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "../root"
import { LearnMore } from "../../pages/learn-more/LearnMore"

export const learnMoreRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/learn-more",
  component: LearnMore,
})
