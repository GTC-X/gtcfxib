import LpFooter from "./component/Footer";
import LpHeader from "./component/Header";

export default function DashboardLayout({ children }) {
  return (
    <>
      <LpHeader />
      <main>{children}</main>
      <LpFooter />
    </>
  )
}