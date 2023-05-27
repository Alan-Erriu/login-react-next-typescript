import Link from 'next/link';
import { navigatationLinks } from '../../../types/index';
import Image from 'next/image';
import logo from '../../../../public/logo.jpg';

const Nav = () => {
  const Links: navigatationLinks[] = [
    { label: 'Inicio', link: '/' },
    { label: 'Servicios', link: '/product' },
    { label: 'Registrate', link: '/register' },
    { label: 'Iniciar sesiòn', link: '/login' }
  ];

  return (
    <nav className="p-4 bg-black w-full shadow-md">
      <div className=" justify-between items-center md:flex">
        <span>
          <Image
            className="rounded-full w-20 h-12 bg-gray-300 hidden md:flex"
            src={logo}
            width={50}
            height={50}
            alt="Logo empresa up!"
          />
        </span>
        <ul className=" md:flex gap-4 mt-4 md:mt-0">
          {Links.map((link) => (
            <li
              className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
              key={link.label}
            >
              <Link href={link.link}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
