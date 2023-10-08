import Typography from '@/common/Typography';

interface IProps {
  items: {
    text: string;
    value: any;
    link?: string;
  }[];
  icon: any;
}

export default function ProfileReportCard({ items, icon }: IProps) {
  return (
    <div className="card border-2 border-gray-500 lg:card-side shadow-xl p-5 w-full lg:w-3/12 relative overflow-hidden">
      <div className="card-body p-0 lg:mt-0">
        <div className="flex justify-between items-center">
          <div className="w-10/12">
            {items.map((item) => (
              <Typography variant="caption" key={item.text}>
                <div className="py-1 flex justify-start items-center flex-wrap">
                  {item.text}: {item.value}
                </div>
              </Typography>
            ))}
          </div>
          <div className="w-2/12">{icon}</div>
        </div>
      </div>
    </div>
  );
}
