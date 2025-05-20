import { SidebarTrigger } from '@/components/ui/sidebar';
import Link from 'next/link';

const HomeNavbar = () => {
  return (
    <nav className="bg-black text-white p-4 shadow-lg fixed top-0 left-0 h-16 w-full">
      <section className="flex justify-between items-center">
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />
          <Link href="/">
            <div className="flex items-center gap-1 ml-2">
              {/* LOGO IMAGE */}
              <h3 className="text-xl font-semibold -tracking-tighter">
                GarageTime
              </h3>
            </div>
          </Link>
        </div>

        <div>
          <h3>Schedule</h3>
        </div>
      </section>
    </nav>
  );
};
export default HomeNavbar;
