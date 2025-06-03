// app/articles/page.tsx
import ArticleCard from '@/components/ArticleCard';

export default function ArticlesPage() {
  const articles = [
    {
      id: 1,
      category: 'اینترنت بدن',
      title: 'حسگرهای پوشیدنی در پزشکی',
      description: 'بررسی فناوری‌های جدید در مانیتورینگ سلامت',
      views: 1200,
      comments: 6,
    },
    {
      id: 2,
      category: 'هوش مصنوعی',
      title: 'کاربرد AI در تشخیص بیماری‌ها',
      description: 'تحلیل جدیدترین الگوریتم‌های تشخیص پزشکی',
      views: 850,
      comments: 4,
    },
    // مقالات دیگر...
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              category={article.category}
              title={article.title}
              description={article.description}
              views={article.views}
              comments={article.comments}
            />
          ))}
        </div>
      </div>
    </section>
  );
}