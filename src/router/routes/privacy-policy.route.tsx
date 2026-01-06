import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "../root"
import { PrivacyPolicy } from "../../pages/privacy-policy/PrivacyPolicy"

export const privacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/privacy-policy",
  component: PrivacyPolicy,
})
