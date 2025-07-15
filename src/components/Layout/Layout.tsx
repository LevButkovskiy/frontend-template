import { Link, Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default Layout
