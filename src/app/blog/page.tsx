import { posts } from '@/app/lib/posts';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.id === params.slug);

  if (!post) return <div>پست یافت نشد!</div>;

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-6">دسته: {post.category}</p>
      <div className="prose max-w-none">
        <p>{post.content}</p>
      </div>
    </article>
  );
}