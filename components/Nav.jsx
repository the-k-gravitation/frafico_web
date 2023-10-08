import Link from "next/link"

const navData = [
  { name: "About", href: "/" },
  { name: "How to", href: "/" },
  { name: "Faqs", href: "/" },
];


const Nav = ({header}) => {
  return (
    <nav className="flex items-center">
      <ul className="flex gap-[96px]">
        {
          navData.map((item, index) => {
            const {name, href} = item
            return <li key={index}>
              <Link href={href} className={`${header ? 'text-primary':'text-white'} cursor-pointer hover:text-accent-hover transition`}>{name}</Link>
            </li>
          })
        }
      </ul>
    </nav>
  )
}

export default Nav