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
    window.location.href = `mailto:braydenwong.code@gmail.com?subject=${data.subject}&body=Hi my name is ${data.name}. email: ${data.email} phone number: ${data.phone} ${data.message}`;
  };

  return (
    <div
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center
      justify-evenly px-10 text-center text-white md:flex-row md:text-left"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className=" text-center text-4xl font-semibold">
          I have got just what you need.{' '}
          <span className="underline decoration-teal-400">Let&apos;s Talk</span>
        </h4>

        <div className="flex flex-col items-start space-y-10">
          <div className="flex items-center justify-center space-x-5 ">
            <PhoneIcon className="h-7 w-7 animate-pulse text-teal-400" />
            <p className="text-2xl">+1 (626)824-0043</p>
          </div>

          <div className="flex items-center justify-center space-x-5 ">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-teal-400" />
            <p className="text-2xl">braydenwong.code@gmail.com</p>
          </div>

          <div className="flex items-center justify-center space-x-5 ">
            <MapPinIcon className="h-7 w-7 animate-pulse text-teal-400" />
            <p className="text-2xl">Salt Lake City, UT</p>
          </div>
        </div>

        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => onSubmit(e)}
          className="flex w-[105%] -translate-x-[2.5%] flex-col justify-center space-y-2"
        >
          <div className="flex space-x-1.5">
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
