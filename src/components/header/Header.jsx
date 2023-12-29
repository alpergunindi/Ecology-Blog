import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitle">
            <span className="headerTitleSm">React and Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src="https://hips.hearstapps.com/hmg-prod/images/nature-quotes-landscape-1648265299.jpg" alt="" />
    </div>
  )
}
