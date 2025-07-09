import LpFooter from "./component/Footer";
import LpHeader from "./component/Header";
import "../globals.css"
import { Suspense } from "react";
import FallbackLoader from "../[locale]/components/LoadingSpinner";

export default function DashboardLayout({ children }) {
  return (
    <body>
      <Suspense fallback={<FallbackLoader />}>
        <LpHeader />
        <main className="bg-white">{children}</main>
        <LpFooter />
      </Suspense>
    </body>
  )
}