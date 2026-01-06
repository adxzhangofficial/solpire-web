import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "../root"
import { SearchResults } from "../../pages/search-results/SearchResults"

export const searchResultsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/search-results",
  component: SearchResults,
})
