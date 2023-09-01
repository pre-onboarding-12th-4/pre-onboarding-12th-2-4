import Header from './Header';
import { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
