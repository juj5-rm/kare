import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

    return (
        <>
            {/* Navbar */}
            <nav className="navbar bg-sigca-black text-sigca-white fixed top-0 left-0 w-full z-50 h-[70px] mx-0">
                <div className="mx-0 flex flex-rox items-center px-6 h-full w-full">
                    {/* Logo */}
                    <div className="text-lg font-bold cursor-pointer">
                        <Link href="/">
                            <Image src="/kare.svg" alt="Kare Logo" width={150} height={100} />
                        </Link>
                    </div>
                    <div className="ml-auto mr-0 flex items-end">
                        <ul className="flex font-roboto text-base space-x-8">
                            <li className="hover:text-gray-300 cursor-pointer"><Link href="/nosotros">Nosotros</Link></li>
                            <li className="hover:text-gray-300 cursor-pointer">
                                <Link href="/noticias">Noticias</Link>
                            </li>
                            <li className="hover:text-gray-300 cursor-pointer"><Link href="/soporte">Soporte</Link></li>
                            <li className="hover:text-gray-300 cursor-pointer">
                                <a href="http://localhost:5173/login">
                                    <Image src="/profile.svg" alt="perfil" width={20} height={20} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
