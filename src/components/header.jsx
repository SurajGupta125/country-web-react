import { NavLink } from "react-router-dom"
import { TiThMenu } from "react-icons/ti"
import { FaXmark } from "react-icons/fa6"
import { useEffect, useState } from "react"

export const Header = () => {

  const [menu, setMenu] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 568)

  const handleMenu = () => {
    if (isMobile) {
      setMenu(!menu)
    }
  }

  const handleMenuCut = () => {
    if (isMobile) {
      setMenu(false)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 568) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
        setMenu(false) // desktop pe menu-open remove
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <nav>
      <div className="containe">
        <div className="navMenu">

          <div className="logo">
            <NavLink to="country">
              <h2>WorldAtlas</h2>
            </NavLink>
          </div>

          <div className={menu && isMobile ? "menu-open" : "menu"}>
            <ul>
              {isMobile && (
                <div className="cut" onClick={handleMenuCut}>
                  <FaXmark />
                </div>
              )}

              <NavLink onClick={handleMenuCut} to="/"><li>Home</li></NavLink>
              <NavLink onClick={handleMenuCut} to="about"><li>About</li></NavLink>
              <NavLink onClick={handleMenuCut} to="country"><li>Country</li></NavLink>
              <NavLink onClick={handleMenuCut} to="contact"><li>Contact</li></NavLink>
            </ul>
          </div>

          {isMobile && (
            <div className="hamburger" onClick={handleMenu}>
              <TiThMenu />
            </div>
          )}

        </div>
      </div>
    </nav>
  )
}
