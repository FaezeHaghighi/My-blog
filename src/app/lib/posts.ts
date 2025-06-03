// src/lib/posts.ts
export type Post = {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: 'پوشیدنی' | 'قابل کاشت' | 'غیرتهاجمی';
};

export const posts: Post[] = [
  {
    id: 'neuralink',
    title: 'Neuralink: رابط مغز و کامپیوتر',
    summary: 'فناوری ایمپلنت‌های عصبی برای درمان بیماری‌ها.',
    content: 'محتوا درباره Neuralink...',
    category: 'قابل کاشت', // مطمئن شوید با نوع Post تطابق دارد
  },
  {
    id: 'smart-watches',
    title: 'ساعت‌های هوشمند و نظارت سلامت',
    summary: 'کاربرد حسگرهای پوشیدنی در مانیتورینگ بدن.',
    content: 'محتوا درباره ساعت‌های هوشمند...',
    category: 'پوشیدنی', // مطمئن شوید با نوع Post تطابق دارد
  },
];