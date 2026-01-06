import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "../root"
import { UserInfoInterface } from "../../pages/user-info-interface/UserInfoInterface"

export const userInfoInterfaceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/user-info-interface",
  component: UserInfoInterface,
})
