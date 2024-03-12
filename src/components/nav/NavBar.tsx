'use client'

import { useRouter } from "next/navigation";
import Link from "next/link";
import { navRoutes as routes } from "./constants"
import CartSummary from "../checkout/CartSummary";

export default function NavBar () {

  const router = useRouter();

  return (
    <>
      <div className="p-4 bg-slate-50">

        <div className="flex items-scenter justify-between pl-20 pr-20">
          <Link href="/">
            <div className="d-flex justify-content-between">
              {/* <img src={logo} width="24px" /> */}
              <div className="m-2 pt-1">
                <p className="text-xl"><strong>Shopper v2</strong></p>
              </div>
            </div>
          </Link>
          <div className="flex grow items-center justify-between p-1">
            <div className="pr-6">
              {routes.map((route) => (
                  <Link key={route.href} href={route.href} className="text-stone-600 p-2 text-base">{route.label}</Link>
              ))}
            </div>

            <div className="" id="">
              <div className="">
                <CartSummary />
                {/* <CheckoutCart /> */}
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

