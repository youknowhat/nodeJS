import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';

type LayoutProps = {
  /** 앨리먼트가 와야함 */
  children: React.ReactNode
}

const Layout: NextPage<LayoutProps> = (props) => {
  return (
    <div>
      <div>
        <Link href="/home">
          <a>home</a>
        </Link>
      </div>
      <div>
        <Link href="/reward">
          <a>reward</a>
        </Link>
      </div>
      <div>
        <Link href="/equity">
          <a>equity</a>
        </Link>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;