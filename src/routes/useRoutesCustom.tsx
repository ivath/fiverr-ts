import { useRoutes } from "react-router"
import UserTemplate from "../templates/user-template/UserTemplate"
import { pathRoute } from "./pathRoute"


const useRoutesCustom = () => {
  const routes = useRoutes([{
    path: pathRoute.homePage,
    element :<UserTemplate/>
  }])
    return (
        routes
  )
}

export default useRoutesCustom