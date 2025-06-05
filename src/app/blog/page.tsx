import { posts } from '@/lib/posts';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">مقالات</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map(post => (
          <div key={post.id} className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.summary}</p>
            
            {/* دکمه جزئیات */}
            <Link
              href={`/blog/${post.id}`} // لینک به صفحه داینامیک
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              مشاهده جزئیات بیشتر
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}