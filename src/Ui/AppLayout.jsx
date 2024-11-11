import { Outlet } from "react-router-dom"
import Header from "./Header"

const AppLayout = () => {
  return (
    <div className="w-full min-h-screen bg-slate-100">
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
