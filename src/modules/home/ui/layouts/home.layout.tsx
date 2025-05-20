'use client';

import { SidebarProvider } from '@/components/ui/sidebar';
import React from 'react';
import HomeNavbar from '../components/home-navbar';
import HomeSidebar from '../components/home-sidebar';
import ScheduleModal from '../components/schedule-modal';

type HomeLayoutProps = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <ScheduleModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <SidebarProvider>
        <div className="w-full">
          <HomeNavbar />
          <section className="flex main-min-h-screen pt-16">
            <HomeSidebar onScheduleClick={() => setIsOpen(true)} />
            <main className="flex-1 overflow-y-auto">{children}</main>
          </section>
        </div>
      </SidebarProvider>
    </>
  );
};
export default HomeLayout;
