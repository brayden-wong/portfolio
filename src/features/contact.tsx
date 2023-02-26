import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { useForm, type SubmitHandler } from 'react-hook-form';

interface Inputs {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const Contact = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:braydenwong.code@gmail.com?subject=${formData.subject}&body=Hi my name is ${formData.name}. ${formData.message} ${formData.phone} ${formData.message}`;
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
          onSubmit={void handleSubmit(onSubmit)}
          className="flex w-[105%] -translate-x-[2.5%] flex-col justify-center space-y-2"
        >
          <div className="flex space-x-1.5">
            <input
              {...register('name')}
              className="contact-input"
              placeholder="Name"
              type="text"
            />
            <input
              {...register('email')}
              className="contact-input"
              placeholder="Email"
              type="email"
            />
          </div>

          <input
            {...register('phone')}
            className="contact-input"
            placeholder="Phone Number"
            type="text"
          />
          <input
            {...register('subject')}
            className="contact-input"
            placeholder="Subject"
            type="text"
          />

          <textarea
            {...register('message')}
            className="contact-input resize-none"
            rows={4}
            placeholder="message"
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
