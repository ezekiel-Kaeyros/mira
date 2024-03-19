import Link from 'next/link';
import React from 'react';

type NewsCardProps = {
  title: string;
  excerpt: string;
  slug?: string;
  readMore: string;
};

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  excerpt,
  slug,
  readMore,
}) => {
  return (
    <Link
      href={`/${slug}`}
      className="w-full md:w-full hover:scale-105 hover:transition hover:ease-in-out transition ease-in-out p-6 bg-[#EBF4FA] rounded-lg my-4 md:m-0"
    >
      <div className="text-2xl   font-bold">{title}</div>
      <div className="my-3">{excerpt}</div>
      <Link className="text-[#587D71] font-bold text-xl" href={`/${slug}`}>
        {readMore}
      </Link>
    </Link>
  );
};

export default NewsCard;
