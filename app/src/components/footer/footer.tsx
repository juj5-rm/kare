import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-sigca-black text-center p-6 h-[60vh] w-full">
            <div className="h-4/5 w-full border-b-[1px] border-sigca-blue flex">

                <div className="flex flex-col items-start w-1/2 h-5/6 mt-6 px-4">
                    <section>
                        <Image src="/kare azul.svg" alt="Sigca" width={150} height={100} />
                        <p className="text-white w-3/5 text-left text-sm my-4">Accede a tu información en tiempo real y optimiza la gestión de tu comunidad.</p>
                    </section>

                    <section className="w-1/3 flex flex-col justify-center items-center h-full">
                        <div className="w-full text-sigca-blue text-sm flex flex-row justify-between items-center">
                            <a href="https://www.facebook.com/share/15Lns26YGB/?mibextid=qi2Omg" target="_blank"><Image src="/facebook.svg" alt="facebook" width={15} height={15} /></a>
                            <a href="https://youtube.com/@adventistasejecafetero?si=sgYNPfoUvdbcG18X" target="_blank"><Image src="/youtube.svg" alt="youtube" width={30} height={30} /></a>
                            <a href="https://www.instagram.com/adventistasejecafetero?igsh=aWJhbHJib3plMHNo" target="_blank"><Image src="/instagram.svg" alt="instagram" width={25} height={25} /></a>
                        </div>
                    </section>
                </div>


                <div className=" w-1/2 h-full">
                    <div className="ml-auto mr-0 justify-start items-start w-1/6">
                        <h3 className="text-sigca-blue text-lg text-left mb-3">Explora</h3>
                        <ul className="text-sigca-white text-sm items-end text-left">
                            <li><Link href="/">Inicio</Link></li>
                            <li><Link href="/login?view=register">Registro</Link></li>
                            <li><Link href="/nosotros">Nosotros</Link></li>
                            <li><Link href="/noticias">Noticias</Link></li>
                            <li><Link href="/soporte">Soporte</Link></li>
                        </ul>
                    </div>
                </div>


            </div>


            <div className="text-sigca-blue text-sm flex mt-4">
                <p className="ml-0 mr-auto">
                    Copyright © 2025. Todos los derechos reservados.
                </p>
                <ul className="flex justify-between mr-0 w-2/5">
                    <li>Política de privacidad</li>
                    <li>Política de cookies</li>
                    <li>Términos & condiciones</li>
                </ul>
            </div>

        </footer>
    );
}
