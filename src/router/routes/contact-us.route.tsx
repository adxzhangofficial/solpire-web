import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "../root"
import { ContactUs } from "../../pages/contact-us/ContactUs"

export const contactUsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact-us",
  component: ContactUs,
})
