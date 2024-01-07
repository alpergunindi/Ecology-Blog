import "./sidebar.css"

export default function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebar">
        <span className="sidebarTitle">ABOUT ME</span>
        <img width="200" src="https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta est voluptate numquam, vel nemo, sequi asperiores earum eligendi recusandae sunt ex accusamus cupiditate.</p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-square-x-twitter"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        <i className="sidebarIcon fa-brands fa-linkedin"></i>
        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        </div>
        </div>
        </div>
  )
}
