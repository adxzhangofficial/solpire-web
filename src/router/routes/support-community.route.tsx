import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "../root"
import { SupportCommunity } from "../../pages/support-community/SupportCommunity"

export const supportCommunityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/support-community",
  component: SupportCommunity,
})
