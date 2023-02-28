import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';

interface Inputs {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const Contact = () => {
  const [data, setData] = useState<Inputs>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:braydenlwong@gmail.com?subject=${data.subject}&body=Hi my name is ${data.name}. email: ${data.email} phone number: ${data.phone} ${data.message}`;
  };

  return (
    <div
      className="relative flex h-screen max-w-7xl flex-col items-center
      justify-evenly px-4 text-center text-white sm:px-10 md:flex-row md:text-left"
    >
      <h3 className="absolute top-4 py-1.5 text-2xl uppercase tracking-[20px] text-gray-500 md:top-24">
        Contact
      </h3>

      <div className="flex flex-col space-y-8">
        <h4 className="py-1.5 text-center text-4xl font-semibold">
          I have got just what you need.{' '}
          <span className="underline decoration-teal-400">Let&apos;s Talk</span>
        </h4>

        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <PhoneIcon className="h-7 w-7 animate-pulse text-teal-400" />
            <p className="text-2xl">+1 (626)824-0043</p>
          </div>

          <div className="flex items-center justify-center space-x-2">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-teal-400" />
            <p className="text-2xl">braydenlwong@gmail.com</p>
          </div>

          <div className="flex items-center justify-center space-x-2">
            <MapPinIcon className="h-7 w-7 animate-pulse text-teal-400" />
            <p className="text-2xl">Salt Lake City, UT</p>
          </div>
        </div>

        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => onSubmit(e)}
          className="flex flex-col justify-center space-y-2 sm:w-full"
        >
          <div className="hidden sm:flex sm:space-x-1.5">
            <input
              className="contact-input"
              placeholder="Name"
              value={data.name}
              onChange={(e) =>
                setData((prev) => ({ ...prev, name: e.target.value }))
              }
              type="text"
            />
            <input
              className="contact-input"
              placeholder="Email"
              value={data.email}
              onChange={(e) =>
                setData((prev) => ({ ...prev, email: e.target.value }))
              }
              type="email"
            />
          </div>

          <input
            className="contact-input sm:hidden"
            placeholder="Name"
            value={data.name}
            onChange={(e) =>
              setData((prev) => ({ ...prev, name: e.target.value }))
            }
            type="text"
          />

          <input
            className="contact-input sm:hidden"
            placeholder="Email"
            value={data.email}
            onChange={(e) =>
              setData((prev) => ({ ...prev, email: e.target.value }))
            }
            type="email"
          />

          <input
            className="contact-input"
            placeholder="Phone Number"
            value={data.phone}
            onChange={(e) =>
              setData((prev) => ({ ...prev, phone: e.target.value }))
            }
            type="text"
          />
          <input
            className="contact-input"
            placeholder="Subject"
            value={data.subject}
            onChange={(e) =>
              setData((prev) => ({ ...prev, subject: e.target.value }))
            }
            type="text"
          />

          <textarea
            className="contact-input resize-none"
            rows={4}
            placeholder="message"
            value={data.message}
            onChange={(e) =>
              setData((prev) => ({ ...prev, message: e.target.value }))
            }
          />
          <button
            className="rounded-md bg-teal-400 py-2 px-10 font-semibold text-black md:py-3"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
