import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (

    <Link className={"flex items-center gap-x-1 "} href={'/'}>
        <div className={"w-9 h-9 sm:w-10 sm:h-10 relative shrink-0"}>
            <Image src={'/images/logo-blue.png'} fill   sizes="100vw" style={{objectFit: "contain"}} alt={"Chrysolite Foundation logo"}/>
        </div>
        <div className={"flex flex-col leading-none"}>
            <span className={"text-[#1A56A7] font-bold text-base tracking-tight"}>
                Chrysolite
            </span>
            <span className={"text-gray-500 text-[10px] font-semibold uppercase tracking-widest mt-0.5"}>
                Foundation
            </span>
        </div>
    </Link>
  )
}

export default Logo