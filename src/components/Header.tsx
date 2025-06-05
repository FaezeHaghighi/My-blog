import Link from 'next/link';

export default function Header() {
  return (
    <header className=" header">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-blue-400">
        <div className="flex justify-between items-center h-16 bg-blue-300">
          {/* لوگو و عنوان */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className=" flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-8 h-8 text-white bg-indigo-600 rounded-full p-1.5"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg> */}
              <span className="mr-3 text-lg font-bold text-white hidden sm:inline-block">
                اینترنت بدن
              </span>
            </Link>
          </div>

          {/* منوی اصلی */}
          <nav className="hidden md:flex space-x-8 rtl:space-x-reverse text-white">
            <Link 
              href="/" 
              className=" hover:text-indigo-600 px-3 py-2 text-sm font-bold"
            >
              صفحه اصلی
            </Link>
            <Link 
              href="/about" 
              className=" hover:text-indigo-600 px-3 py-2 text-sm font-medium"
            >
              درباره ما
            </Link>
            <Link 
              href="/blog" 
              className=" hover:text-indigo-600 px-3 py-2 text-sm font-medium"
            >
              وبلاگ
            </Link>
            <Link 
              href="/contact" 
              className=" hover:text-indigo-600 px-3 py-2 text-sm font-medium"
            >
              تماس
            </Link>
          </nav>

          {/* صبت نام */}
          <div className="md:hidden flex items-center">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-200 hover:bg-blue-700 transition-colors">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* دکمه نمونه (دسکتاپ) */}
          <div className="hidden md:flex items-center">
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            ورود 
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 mr-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}