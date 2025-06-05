// app/blog/[postId]/page.tsx
import { posts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default function PostPage({ params }: { params: { postId: string } }) {
  const post = posts.find(p => p.id === params.postId);
  
  if (!post) return notFound();

  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <article className="bg-white p-6 rounded-lg shadow-lg">
        {/* هدر پست */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className={`px-3 py-1 text-sm rounded-full ${
              post.category === 'پوشیدنی' ? 'bg-blue-100 text-blue-800' :
              post.category === 'قابل کاشت' ? 'bg-green-100 text-green-800' :
              'bg-yellow-100 text-yellow-800'
            }`}>
              {post.category}
            </span>
            <span className="text-gray-500 text-sm">
              زمان مطالعه: 2 دقیقه
            </span>
          </div>
          
          <h1 className="text-3xl font-bold mb-4 text-gray-900">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
            <div>
              <p className="font-medium text-black">نویسنده: تیم اینترنت بدن</p>
              <p className="text-black text-sm">تاریخ انتشار: ۱۴۰۳/۰۵/۱۵</p>
            </div>
          </div>
        </header>

        {/* محتوای پست */}
        <section 
          className="prose prose-lg max-w-none mt-8"
          dangerouslySetInnerHTML={{ __html: post.fullContent }}
        >
        </section>

        {/* بخش پایانی */}
        <footer className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">#فناوری</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">#سلامت</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">#اینترنت_بدن</span>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              بازگشت به لیست مقالات
            </Link>
            
            <div className="flex gap-4">
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                {/* آیکون اشتراک گذاری */}
              </button>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                {/* آیکون ذخیره */}
              </button>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}