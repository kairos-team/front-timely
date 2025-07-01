import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function BottomMenu() {
  const [path, setPath] = useState('');
  const pathName = usePathname();

  useEffect(() => {
    setPath(pathName);
  }, [pathName]);

  const svgIcons = [
    {
      active: "/icons/blueHome.svg",
      inactive: "/icons/home.svg",
      href: "/dashboard"
    },
    {
      active: "/icons/blueCalendar.svg",
      inactive: "/icons/calendar.svg",
      href: "/calendar"
    },
    {
      active: "/icons/blueReport.svg",
      inactive: "/icons/report.svg",
      href: "/report"
    },
    {
      active: "/icons/blueUser.svg",
      inactive: "/icons/user.svg",
      href: "/user"
    }
  ]
  return (
    <div className="flex justify-around">
      {svgIcons.map((icon, index) => (
        <Link href={icon.href} key={index}>
          <Image src={path.includes(icon.href) ? icon.active : icon.inactive} width={24} height={24} alt="Icones do Menu" />
        </Link>
      ))}
    </div>
  )
}