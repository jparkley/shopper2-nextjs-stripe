'use client'

import { useRouter } from "next/navigation";
import Link from "next/link";
import { navRoutes as routes } from "./constants"

export default function NavBar () {

  const router = useRouter();

  return (
    <>
      <div className="p-2 bg-slate-50">

        <div className="flex items-scenter justify-between">
            <a href="/" className="navbar-brand d-flex align-items-center">
                  <div className="d-flex justify-content-between">
                    {/* <img src={logo} width="24px" /> */}
                    <div className="m-2">
                      <p className="text-2xl"><strong>Shopper V2</strong></p>
                    </div>
                  </div>
            </a>
            <div className="flex grow items-center justify-between p-1">
              <div className="pr-6">
                {routes.map((route) => (
                    <Link key={route.href} href={route.href} className="text-stone-600 p-2 text-xl">{route.label}</Link>
                ))}
              </div>

              <div className="" id="">
                <div className="">
                    <p>Cart Summary & Checkout</p>
                  {/* <CartSummary />
                  <CheckoutCart /> */}
                </div>
              </div>
            </div>
        </div>

      </div>
    </>
  )
}

