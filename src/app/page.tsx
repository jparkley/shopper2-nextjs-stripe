
import NavBar from "@/components/nav/NavBar";
import Product from "@/components/product/Product";
import products from "@/components/product/constants";

export default function Home() {
  return (    
    <main className="">
        <NavBar />

        <div className="flex flex-col items-center justify-between p-2">
          <div id="react-modals" />
          <div>Open Modal</div>
          <div className="flex justify-center p-6 flex-col">
            <h2 className="text-3xl leading-5 font-light">
              <span className="text-4xl font-normal">Shop Now</span> with the most <em>reliable</em> 
              <mark className="bg-amber-100">React</mark> shopping cart
            </h2>
            <div className="pt-4">
              <h5 className="text-center text-lg font-medium mb-5">Modern and upscale shopping destination</h5>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-3 gap-4">
              {products.map((product, idx) => (
                <Product key={idx} product={product} />
              ))}
            </div>
          </div>
        </div>
        
    </main>
  )
}
