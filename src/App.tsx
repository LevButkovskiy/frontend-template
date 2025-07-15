import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default App
