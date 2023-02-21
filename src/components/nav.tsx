import { SocialIcon } from 'react-social-icons';
import { EnvelopeIcon } from '@heroicons/react/24/solid';

const SOCIAL_STYLES = { width: 36, height: 36 };

export const Nav = () => {
  return (
    <nav className="mx-8 flex justify-between p-4 text-white">
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
      <div className="flex cursor-pointer items-center space-x-2">
        <EnvelopeIcon className="h-9 w-9" />
        <p className="opacity-0 duration-300 sm:opacity-100">Get in touch</p>
      </div>
    </nav>
  );
};
