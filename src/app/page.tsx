// app/page.tsx
import { posts } from '@/lib/posts'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* کادر اصلی  */}
      <div className="w-full bg-white shadow-md p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-800">اینترنت بدن</h1>
          <p className="mt-2 text-gray-600">
            در تعریف خیلی ساده، زمانی که میان اینترنت اشیا یا همان IoT و بدن انسان ارتباطی صورت گیرد، اینترنت بدن یا IoB صورت می پذیرد.
            اینترنت بدن یک نوعی از فرمت اینترنت اشیا می باشد و بدن انسان از طریق دستگاه هایی که در بدن کاشته، بلعیده و به هر صورتی متصل می شوند، ارتباط برقرار می کند و به شبکه متصل می شوند.
          </p>
        </div>
      </div>

      {/*  محتوا زیر کادر اصلی */}
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <span className={`inline-block px-3 py-1 text-sm rounded-full mb-3 ${
                  post.category === 'پوشیدنی' ? 'bg-blue-100 text-blue-800' :
                  post.category === 'قابل کاشت' ? 'bg-green-100 text-green-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {post.category}
                </span>
                <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.summary}</p>
                
                {/* تغییر اصلی: استفاده از تگ <a> برای لینک خارجی */}
                <a
                  href={post.id === 'neuralink' ? 
                    'https://farahoush.ir/%D9%86%DB%8C%D9%88%D8%B1%D8%A7%D9%84%DB%8C%D9%86%DA%A9-neuralink-%DA%86%DB%8C%D8%B3%D8%AA/' : 
                    `/blog/${post.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
                >
                  مشاهده جزئیات
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}