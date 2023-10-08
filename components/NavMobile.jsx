import Link from "next/link";

const navData = [
  { name: "About", href: "/" },
  { name: "How to", href: "/" },
  { name: "Faqs", href: "/" },
];

const NavMobile = () => {
  return (
    <nav className=" bg-accent w-full p-4">
      <ul className="flex flex-col gap-y-6">
        {navData.map((item, index) => {
          const { name, href } = item;
          return <li key={index}>
            <Link href={href} className="text-white hover:text-accent">{name}</Link>
          </li>;
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
