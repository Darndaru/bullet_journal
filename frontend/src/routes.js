import {DAILY_ROUTE, FUTURE_ROUTE, LOGIN_ROUTE, MONTHLY_ROUTE, NOT_FOUND, REGISTRATION_ROUTE} from "./utils/consts";
import DailyLog from "./pages/DailyLog";
import MonthlyLog from "./pages/MonthlyLog";
import FutureLog from "./pages/FutureLog";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

export const publicRoutes = [
  {
    path: DAILY_ROUTE,
    Component: <DailyLog />
  },
  {
    path: MONTHLY_ROUTE,
    Component: <MonthlyLog />
  },
  {
    path: FUTURE_ROUTE,
    Component: <FutureLog />
  },
  {
    path: LOGIN_ROUTE,
    Component: <Auth />
  },
  {
    path: REGISTRATION_ROUTE,
    Component: <Auth />
  },
  {
    path: NOT_FOUND,
    Component: <NotFound />
  }
]