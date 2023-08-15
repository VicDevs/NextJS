import Link from "next/link";

export default function NavBar({active}) {
    return(
        <nav className="flex justify-between items-center p-5 m-2 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-xl shadow-neutral-950">
            <span className="">LOGO</span>
            <ul className="flex gap-4 items-center">
                <li className="hover:bg-neutral-800 hover:-translate-y-1 hover:shadow-sm hover:shadow-yellow-500 transition duration-500 p-1 rounded-md"><Link href="#">Home</Link></li>
                <li className="hover:bg-neutral-800 hover:-translate-y-1 hover:shadow-sm hover:shadow-emerald-500 transition duration-500 p-1 rounded-md"><Link href="#">Missions</Link></li>
                <li className="hover:bg-neutral-800 hover:-translate-y-1 hover:shadow-sm hover:shadow-red-600 transition duration-500 p-1 rounded-md"><Link href="#">Powers</Link></li>
                <li className="hover:bg-neutral-800 hover:-translate-y-1 hover:shadow-sm hover:shadow-sky-500 transition duration-500 p-1 rounded-md"><Link href="#">Perfil</Link></li>
            </ul>
        </nav>
    )
}