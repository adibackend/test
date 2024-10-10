import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
interface DashboardCardsProps{
title:string,
count:number,
icon:React.ReactElement<LucideIcon>
}

const DashboardCard = ({title,count,icon}:DashboardCardsProps) => {
  return (
    
      <Card className="bg-slate-100 dark:bg-slate-800 p-4 pb-0 ">
        <CardContent>
          <h3 className="text-center mb-4 text-3xl font-bold text-slate-500 dark:text-slate-200">
           {title}
          </h3>
          <div className="flex gap-5 justify-center items-center">
           {icon}
          <h3 className="text-5xl font-semibold text-slate-500 dark:text-slate-200">
            {count}
          </h3>
          </div>
        </CardContent>
      </Card>

  );
};

export default DashboardCard;
