import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "../root"
import { OtpRequest } from "../../pages/otp-request/OtpRequest"

export const otpRequestRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/otp-request",
  component: OtpRequest,
})
