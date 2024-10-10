import DashboardCard from '@/components/dashboard/DashboardCard';
import { Button } from '@/components/ui/button';

import { Folder, MessageCircle,  User } from 'lucide-react';
export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-stretch  gap-5 mb-5   ">
      
        <DashboardCard
          title="Categories"
          count={12}
          icon={<Folder className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Categories"
          count={12}
          icon={<Folder className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Categories"
          count={12}
          icon={<Folder className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Categories"
          count={12}
          icon={<Folder className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Users"
          count={750}
          icon={<User className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="posts"
          count={1200}
          icon={<MessageCircle className="text-slate-500" size={72} />}
        />
      </div>
     
    </>
  );
}
