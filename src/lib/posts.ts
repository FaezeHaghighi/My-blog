// src/lib/posts.ts
export type Post = {
  id: string;
  title: string;
  summary: string;
  content: string;
  fullContent: string;
  category: 'پوشیدنی' | 'قابل کاشت' | 'بلعیدنی';
};

export const posts: Post[] = [
  {
    id: 'neuralink',
    title: 'Neuralink: رابط مغز و کامپیوتر',
    summary: 'فناوری ایمپلنت‌های عصبی برای درمان بیماری‌ها.',
    content: `
      <h2 class="text-2xl font-bold mb-4">Neuralink Corp.</h2>
      <p class="mb-4 leading-relaxed ">
        یک شرکت فناوری عصبی فراانسانی آمریکایی است که از سال 2024، رابط‌های کاشتنی مغز و کامپیوتر (BCIs) را توسعه داده است که به عنوان ایمپلنت‌های مغزی نیز شناخته می‌شود. توسط ایلان ماسک و تیمی متشکل از هشت دانشمند و مهندس تاسیس شد.
      </p>
      
      <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
        <h3 class="font-bold text-lg mb-2">ویژگی‌های کلیدی:</h3>
        <ul class="list-disc pl-5 space-y-2">
          <li>رابط مغز-ماشین پرسرعت</li>
          <li>ایمپلنت‌های با اندازه میکرون</li>
          <li>قابلیت درمان اختلالات عصبی</li>
        </ul>
      </div>
    `,
    fullContent: `
      <article class="prose max-w-none">
        <h1 class="text-3xl font-bold mb-6">تاریخچه کامل Neuralink</h1>
        
        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">تأسیس و اهداف اولیه</h2>
          <p class="mb-4 leading-relaxed">
            شرکت Neuralink در سال 2016 توسط ایلان ماسک تأسیس شد. هدف اولیه این شرکت توسعه فناوری‌های رابط مغز و کامپیوتر برای کمک به افراد مبتلا به اختلالات عصبی بود.
          </p>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-bold text-lg mb-2">دستاوردهای اولیه:</h3>
            <ul class="list-disc pl-5 space-y-2">
              <li>توسعه نخستین پروتوتایپ در سال 2019</li>
              <li>آزمایش موفق روی حیوانات در 2020</li>
              <li>دریافت تأییدیه FDA برای آزمایشات انسانی در 2023</li>
            </ul>
          </div>
        </section>
        
        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">فناوری‌های پیشرفته</h2>
          <p class="mb-4">
            سیستم Neuralink از چندین جزء کلیدی تشکیل شده است:
          </p>
          <ol class="list-decimal pl-5 space-y-3">
            <li class="font-medium">تراشه‌های N1 با ابعاد بسیار کوچک</li>
            <li class="font-medium">ربات جراح دقیق برای کاشت ایمپلنت</li>
            <li class="font-medium">نرم‌افزار پیشرفته پردازش سیگنال‌های عصبی</li>
          </ol>
        </section>
      </article>
    `,
    category: 'قابل کاشت',
  },
  {
    id: 'smart-watches',
    title: 'ساعت‌های هوشمند و نظارت سلامت',
    summary: 'کاربرد حسگرهای پوشیدنی در مانیتورینگ بدن.',
    content: `
      <div class="prose max-w-none">
        <h2 class="text-2xl font-bold mb-4">نظارت سلامت با ساعت‌های هوشمند</h2>
        <p class="mb-4">
          ساعت‌های هوشمند امروزی مجهز به حسگرهای پیشرفته‌ای هستند که می‌توانند پارامترهای مختلف سلامت را اندازه‌گیری کنند.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div class="bg-green-50 p-4 rounded-lg">
            <h3 class="font-bold text-lg mb-2">حسگرهای اصلی:</h3>
            <ul class="list-disc pl-5">
              <li>ضربان قلب</li>
              <li>اکسیژن خون</li>
              <li>فشار خون</li>
              <li>الگوی خواب</li>
            </ul>
          </div>
          
          <div class="bg-purple-50 p-4 rounded-lg">
            <h3 class="font-bold text-lg mb-2">کاربردهای پزشکی:</h3>
            <ul class="list-disc pl-5">
              <li>تشخیص آریتمی قلبی</li>
              <li>پایش بیماران دیابتی</li>
              <li>مدیریت استرس</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    fullContent: `
      <article class="prose max-w-none">
        <h1 class="text-3xl text-black font-bold mb-6">ساعت‌های هوشمند: انقلابی در سلامت دیجیتال</h1>
        
        <section class="mb-8">
          <h2 class="text-2xl  text-black font-medium mb-4">تکامل فناوری پوشیدنی</h2>
          <p class="mb-4 text-black">
            از اولین گام‌سنج‌های ساده تا دستگاه‌های پیشرفته امروزی، فناوری پوشیدنی مسیر طولانی را طی کرده است.
          </p>
        </section>
        
        <section class="mb-8">
          <h2 class="text-2xl text-black font-semibold mb-4">مطالعات موردی موفق</h2>
          <div class="bg-blue-50 p-4 rounded-lg">
            <h3 class="font-bold text-black  text-lg mb-2">آمارهای کلیدی:</h3>
            <ul class="list-disc pl-5 space-y-2 text-black">
              <li>کاهش 30% ایست‌های قلبی تشخیص داده نشده</li>
              <li>افزایش 45% آگاهی کاربران از وضعیت سلامت</li>
              <li>صرفه‌جویی سالانه 2.5 میلیارد دلار در هزینه‌های درمانی</li>
            </ul>
          </div>
        </section>
      </article>
    `,
    category: 'پوشیدنی',
  },
  {
    id: 'edible-tech',
    title: 'فناوری‌های بلعیدنی',
    summary: 'آشنایی با جدیدترین فناوری‌های بلعیدنی در حوزه اینترنت بدن',
    content: `
      <div class="prose max-w-none text-black">
        <h2 class="text-2xl font-bold mb-4">کپسول‌های هوشمند بلعیدنی</h2>
        <p class="mb-4">
          فناوری‌های بلعیدنی جدیدترین نوآوری در حوزه پزشکی دیجیتال هستند که امکان نظارت داخلی بر بدن را فراهم می‌کنند.
        </p>
        
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
          <h3 class="font-bold text-lg mb-2">مزایای کلیدی:</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li>عدم نیاز به روش‌های تهاجمی</li>
            <li>دقت بالا در جمع‌آوری داده‌ها</li>
            <li>کاهش هزینه‌های تشخیصی</li>
          </ul>
        </div>
      </div>
    `,
    fullContent: `
      <article class="prose max-w-none text-black">
        <h1 class="text-3xl font-bold mb-6">انقلاب فناوری‌های بلعیدنی در پزشکی</h1>
        
        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">چگونه کار می‌کنند؟</h2>
          <p class="mb-4">
            کپسول‌های هوشمند بلعیدنی پس از ورود به بدن، با استفاده از سنسورهای مختلف شروع به جمع‌آوری داده می‌کنند.
          </p>
        </section>
        
        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">کاربردهای بالینی</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h3 class="font-bold text-lg mb-2">تشخیصی:</h3>
              <ul class="list-disc pl-5 space-y-2">
                <li>اندوسکوپی کپسولی</li>
                <li>مانیتورینگ pH معده</li>
                <li>تشخیص خونریزی‌های داخلی</li>
              </ul>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h3 class="font-bold text-lg mb-2">درمانی:</h3>
              <ul class="list-disc pl-5 space-y-2">
                <li>تحویل هدفمند دارو</li>
                <li>درمان عفونت‌های روده‌ای</li>
                <li>کنترل دیابت</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section class="bg-gray-50 p-6 rounded-lg">
          <h2 class="text-2xl font-semibold mb-4">شرکت‌های پیشرو</h2>
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-100">
              <tr>
                <th class="px-4 py-2 text-right">شرکت</th>
                <th class="px-4 py-2 text-right">محصول</th>
                <th class="px-4 py-2 text-right">کاربرد</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-2">Proteus Digital Health</td>
                <td class="px-4 py-2">قرص هوشمند</td>
                <td class="px-4 py-2">پایش مصرف دارو</td>
              </tr>
              <tr>
                <td class="px-4 py-2">HQ, Inc.</td>
                <td class="px-4 py-2">کپسول تشخیصی</td>
                <td class="px-4 py-2">اندوسکوپی روده</td>
              </tr>
            </tbody>
          </table>
        </section>
      </article>
    `,
    category: 'بلعیدنی',
  }
];