import Header from '@/modules/admin/components/layout/Header';
import Sidebar from '@/modules/admin/components/layout/Sidebar';
import '../globals.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <Header />
        <div className="grid grid-cols-12">
          <div className="col-span-1">
            <Sidebar />
          </div>
          <div className="col-span-11" style={{ paddingTop: '80px' }}>
            {children}
          </div>
        </div>
    </>
  );
}
