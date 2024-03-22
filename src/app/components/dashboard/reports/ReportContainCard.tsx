import ReportCard from '@/app/[lang]/(dashboard)/common/components/report-card/ReportCard';
import Link from 'next/link';

const ReportContainCard: React.FC<{
  data: { id: string; text: string; btn: any }[];
  href: string;
}> = (props) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {props.data.map((item, index) => {
        return (
          <Link href={`${props.href}/${item.id}`} key={index}>
            <ReportCard
              key={index}
              title={item.id}
              date={item.text}
              reportType={item.btn}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default ReportContainCard;
