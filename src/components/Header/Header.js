import s from "./Header.module.css"
function Header() {
  return (
    <header className = {s.header}>
      <h1 className = {s.title}>Header</h1>
      <ul className = {s.ul}>
        <li>
          <a href="/home">HOME</a>
        </li>
        <li>
          <a href="/about">ABOUT</a>
        </li>
        <li>
          <a href="/contacts">CONTACTS</a>
        </li>
      </ul>
    </header>
  )
}
export default Header
