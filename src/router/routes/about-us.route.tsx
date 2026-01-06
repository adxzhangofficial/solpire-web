import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "../root"
import { AboutUs } from "../../pages/about-us/AboutUs"

export const aboutUsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about-us",
  component: AboutUs,
})
