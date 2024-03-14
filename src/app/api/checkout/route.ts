import { ICartProduct } from "@/lib/types/types";
import { NextRequest, NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const getStripeProducts = async () => {
  const allProducts = await stripe.products.list();
  const activeProducts = allProducts.data.filter((product: any) => product.active === true );
  return activeProducts;
}

export const POST = async (request: NextRequest) => {

  const { data } = await request.json();
  const cartProducts: ICartProduct[] = data;

  console.log('==== req.cartProducts from front', cartProducts)

  let stripeProducts = await getStripeProducts();
  console.log('==== products from stripe', stripeProducts)

  try {
    for (const cartProduct of cartProducts) {
      const alreadyRegisteredProduct = stripeProducts.find(
        (stripeProduct: any) =>
          stripeProduct?.name?.toLowerCase() == cartProduct.name.toLowerCase());

      // create a new Stripe product for this product
      if (!alreadyRegisteredProduct) {
        await stripe.products.create({
          name: cartProduct.name,
          default_price_data: {
            unit_amount: cartProduct.price * 100, // stripe format
            currency: 'usd',
          }
        });
      }
    }
  } catch (error) {
    console.error("Error in create a new Stripe product");
    throw error;
  }

  return NextResponse.json({ url: "" });
  
}