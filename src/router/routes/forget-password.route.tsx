import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "../root"
import { ForgetPassword } from "../../pages/forget-password/ForgetPassword"

export const forgetPasswordRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/forget-password",
  component: ForgetPassword,
})
