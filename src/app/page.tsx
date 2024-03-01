
import NavBar from "@/components/nav/NavBar";
import Product from "@/components/product/Product";
import products from "@/components/product/constants";

export default function Home() {
  return (    
    <main className="">
        <NavBar />
        
        <div className="flex flex-col items-center justify-between p-20">
          <div className="flex justify-center p-10">
                <h2 className="text-3xl leading-5">
                  <strong>Shop Now</strong>, most <em>reliable</em> <mark>React</mark> shopping cart
                </h2>
          </div>
          <div className="flex flex-col gap-20">
                <div className="grid grid-cols-3">
                  {products.map((product, idx) => (
                    <Product key={idx} product={product} />
                  ))}
                </div>
          </div>          
        </div>

    </main>
  )
}
