import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header>
            <nav>
                <div className='navbar justify-between bg-base-300'>
                    <Link href={`/`} className='btn btn-ghost text-lg'>
                    e-shop
                    </Link>
                    <ul>
                        <li>
                            <Link href={`/cart`} className=' btn btn-ghost rounded-btn '>cart</Link>
                        </li>
                        <li>
                            <Link href={`/sing-in`} className=' btn btn-ghost rounded-btn '>sing in</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </header>
    );
};

export default Header;