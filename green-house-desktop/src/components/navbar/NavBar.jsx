import Link from "next/link";

export default function NavBar({active}) {
    return(
        <nav className="flex justify-between items-center p-5 m-2 rounded-md bg-neutral-900 border border-neutral-800 shadow-xl shadow-neutral-950">
            <a href="#">
                <h1>
                    LOGO
                </h1>
            </a>
            <ul className="flex gap-4 items-center justify-end">
                <li className="hover:bg-neutral-800 hover:-translate-y-1 p-1 rounded-md transition duration-300"><Link className={active == "inicio" && 'border-b-2 border-emerald-500'} href="/paginaInicial">Inicio</Link></li>
                <li className="hover:bg-neutral-800 hover:-translate-y-1 p-1 rounded-md transition duration-300"><Link className={active == "tarefas" && 'border-b-2 border-emerald-500'} href="/tarefas">Missões</Link></li>
                <li className="hover:bg-neutral-800 hover:-translate-y-1 p-1 rounded-md transition duration-300"><Link className={active == "poderes" && 'border-b-2 border-emerald-500'} href="/poderes">Powers</Link></li>
                <li className="hover:bg-neutral-800 hover:-translate-y-1 p-1 rounded-md transition duration-300"><Link className={active == "perfil" && 'border-b-2 border-emerald-500'} href="/perfil">Perfil</Link></li>
            </ul>
        </nav>
    )
}