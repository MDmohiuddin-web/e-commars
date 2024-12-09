"use client";

import React, { useEffect, useState } from "react";
import useCartService from "../lib/models/Hooks/useCartStore";
import Link from "next/link";

const Menu = () => {
  const { items } = useCartService();
  const [mounted, setmounted] = useState(false);
  useEffect(() => {
    setmounted(true);
  }, []);

  return (
    <div>
      <ul className="flex items-stretch">
        <li>
          <Link href={"/cart"} className="btn btn-ghost rounded-btn">
            Cart
            {mounted && items.length != 0 && (
              <div className="badge badge-secondary">
                {items.reduce((a, c) => a + c.qty, 0)}
              </div>
            )}
          </Link>
        </li>
        <li>
          <button className="btn btn-ghost rounded-btn" type="button">
            sign in{" "}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
