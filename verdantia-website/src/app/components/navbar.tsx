import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { signOut } from "@firebase/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { useAuthState } from 'react-firebase-hooks/auth';

interface myProps {
  buttonText?: string;
  route?: string;
}

const Navbar: React.FC<myProps> = ( {buttonText, route} ) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const [user] = useAuthState(auth);

  if (user) {
    buttonText = "Sign Out";
  }
  else {
    buttonText = "Sign In";
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSignOut = () => {
    if (user) {
      signOut(auth);
      console.log('Sign Out');
      router.push('/');
    }
    else {
      router.push('/signIn');
    }
  };

  return (
    <div className="relative">
      <div className="bg-custom-green py-[1vw] mt-[1vw]"></div>
      <div className="container mx-auto flex items-center justify-between py-[1vw] mt-[1vw] mb-[1vw]" style={{ fontFamily: 'Bellota Text' }}>
        {/* Move the text to the left with absolute positioning */}
        <div className="absolute left-0 ml-[8vw]">
          <div className="text-black" style={{ fontSize: '1.75vw' }}>
            VERDANTIA | Careers
          </div>
        </div>
        <div className="flex items-center space-x-[1.5vw] mr-[8vw] absolute right-0" style={{ fontSize: '1.25vw' }}>
          <NavLink href="/" text="Home" />
          <NavLink href="/benefits" text="Benefits" />
          <NavLink href="/jobs" text="Jobs" />
          <NavLink href="/portal" text="Portal" />
          {user &&
            <div className="bg-neutral-700 rounded-lg py-[0.25vw] px-[0.8vw] text-white" style={{ fontSize: '0.1vw'}}>
              <NavLink href="/signIn" text="Sign Out"/>
            </div>
          }
          {!user &&
            <div className="bg-neutral-700 rounded-lg py-[0.25vw] px-[0.8vw] text-white" style={{ fontSize: '0.1vw'}}>
              <NavLink href="/signIn" text="Sign In"/>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

interface NavLinkProps {
  href: string;
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href}>
      <motion.span
        className="cursor-pointer"
        style={{ fontSize: '1.25vw', position: 'relative' }} 
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {text}
        <motion.div
          className="underline"
          initial={{ scaleX: 0, originX: 0.5 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            bottom: '-2px',
            left: 0,
            width: '100%',
            height: '2px',
            background: '#404040',
            originX: 0.5,
          }}
        />
      </motion.span>
    </Link>
  );
};

export default Navbar;