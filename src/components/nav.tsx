import { SocialIcon } from 'react-social-icons';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const SOCIAL_STYLES = { width: 36, height: 36 };

export const Nav = () => {
  return (
    <nav className="top-0 flex w-full justify-between py-4 px-12 text-white">
      <div className="flex space-x-4">
        <SocialIcon
          style={SOCIAL_STYLES}
          url="https://www.linkedin.com/in/brayden-wong-523056228/"
        />
        <SocialIcon
          bgColor="white"
          style={SOCIAL_STYLES}
          url="https://www.github.com/brayden-wong"
        />
      </div>
      <Link href='#contact' className="flex cursor-pointer items-center space-x-2">
        <EnvelopeIcon className="h-8 w-8" />
        <p className="opacity-0 duration-300 sm:opacity-100">Get in touch</p>
      </Link>
    </nav>
  );
};
