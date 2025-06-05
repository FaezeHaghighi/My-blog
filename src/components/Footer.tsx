import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          {/* لوگو */}
          {/* <span className="mr-3 text-xl">اینترنت بدن</span> */}
        </Link>

        <p className="text-sm text-gray-500 sm:mr-4 sm:pr-4 sm:border-r-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} اینترنت بدن
        </p>

        <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-4">
          <a href="#" className="text-gray-500 hover:text-indigo-600">
            < FaFacebook className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-500 hover:text-indigo-600">
            <FaTwitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-500 hover:text-indigo-600">
            < FaInstagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-500 hover:text-indigo-600">
            < FaLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}