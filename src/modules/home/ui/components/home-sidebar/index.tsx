'use client';

import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { CalendarIcon, HomeIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type MenuItem = {
  title: string;
  url?: string;
  icon: React.ReactNode;
  auth?: boolean;
  action?: () => void;
};
const items: MenuItem[] = [
  {
    title: 'Home',
    url: '/',
    icon: <HomeIcon className="h-[1cap] aspect-[1]" />,
  },
  {
    title: 'Schedule',
    icon: <CalendarIcon className="h-[1cap] aspect-[1]" />,
    auth: true,
  },
];

const HomeSidebar = ({ onScheduleClick }: { onScheduleClick: () => void }) => {
  return (
    <>
      <Sidebar
        className="pt-16 border-none"
        collapsible="icon"
      >
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className="cursor-pointer"
                    onClick={() => {
                      if (item.title === 'Schedule') {
                        onScheduleClick();
                      }
                    }}
                    tooltip={item.title}
                    isActive={false}
                  >
                    {item.url ? (
                      <Link
                        href={item.url}
                        className="flex items-baseline gap-0.5"
                      >
                        {item.icon}
                        <span className="">{item.title}</span>
                      </Link>
                    ) : (
                      <div className="flex items-baseline gap-0.5">
                        {item.icon}
                        <span className="">{item.title}</span>
                      </div>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </Sidebar>
    </>
  );
};
export default HomeSidebar;
