'use client';

import NavBar from "@/components/nav/NavBar";

const Success = () => {
  return (
    <>
      <main>
        <NavBar />
        <div className="flex flex-col items-center justify-between p-2 mt-10">
          <h2 className="font-bold text-lg">Your payment was successfully processed!</h2>
        </div>
      </main>
    </>
  )
}

export default Success