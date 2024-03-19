import React from 'react';
import NewsCard from './NewsCard';

type NewsPropsValuesTypes = {
  title: string;
  readMore: string;
};

type NewsPropsTypes = {
  newsContent: NewsPropsValuesTypes;
};

const News: React.FC<NewsPropsTypes> = ({ newsContent }) => {
  return (
    <div className="py-4 md:py-16">
      <div className="text-4xl font-bold mb-8">{newsContent.title}</div>
      <div className="grid grid-cols-1 sm:max-w-sm sm:mx-auto md:max-w-full sm:grid-col-2  gap-5 md:grid-cols-2 lg:grid-cols-3 ">
        <NewsCard
          readMore={newsContent.readMore}
          title="I Report Roundtable: Working definition of anti-black racism"
          excerpt="When the conversation turns to anti-black racism, there is often a good amount of discord – given the differing definitions and understanding...."
        />
        <NewsCard
          readMore={newsContent.readMore}
          title="I Report Roundtable: Working definition of anti-asian racism"
          excerpt="When the conversation turns to anti-asian racism, there is often a good amount of discord – given the differing definitions and understanding...."
        />
        <NewsCard
          readMore={newsContent.readMore}
          title="I Report Roundtable: Working definition of anti-black racism"
          excerpt="When the conversation turns to anti-black racism, there is often a good amount of discord – given the differing definitions and understanding...."
        />
      </div>
    </div>
  );
};

export default News;
