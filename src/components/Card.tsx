import Link from 'next/link';
import { Post } from '@/app/lib/posts';
interface CardProps{
  post : Post;
}

export default function Card({ post }:  CardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-4">{post.summary}</p>
      <Link 
        href={`/blog/${post.id}`} 
        className="text-blue-500 hover:underline"
      >
        مطالعه بیشتر
      </Link>
    </div>
  );
}