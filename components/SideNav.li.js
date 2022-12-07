import Link from "next/link";

export const SideNavLi = (props) => {
  return (
    <li>
      <Link href={props.link || "/"} passHref>
        <a
          className="relative flex flex-row items-center pr-6 border-l-4 border-transparent h-11 hover:border-purple-700 hover:bg-gray-50 focus:outline-none dark:hover:bg-neutral-800"
          onClick={() => { props.setToggleNav(!props.toggleNav) }}
        >
          <span className="inline-flex items-center justify-center ml-4">{props.svg}</span>
          <span className="ml-2 text-sm tracking-wide truncate">{props.text || "text"}</span>
        </a>
      </Link>
    </li>
  )
}