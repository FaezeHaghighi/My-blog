import { posts,Post } from '@/app/lib/posts';
import Card from '@/components/Card';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">وبلاگ اینترنت بدن (IoB)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}