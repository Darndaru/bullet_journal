import {DAILY_ROUTE, FUTURE_ROUTE, LOGIN_ROUTE, MONTHLY_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import DailyLog from "./pages/DailyLog";
import MonthlyLog from "./pages/MonthlyLog";
import FutureLog from "./pages/FutureLog";
import Auth from "./pages/Auth";

export const publicRoutes = [
  {
    path: DAILY_ROUTE,
    Component: DailyLog
  },
  {
    path: MONTHLY_ROUTE,
    Component: MonthlyLog
  },
  {
    path: FUTURE_ROUTE,
    Component: FutureLog
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  }
]