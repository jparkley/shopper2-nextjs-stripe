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
  // console.log('==== products from stripe', stripeProducts)

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

  stripeProducts = await getStripeProducts();
  let checkoutProducts: any = [];

  cartProducts.map((cartProduct) => {
    const verifiedProduct = stripeProducts.find((prod: any) => prod?.name?.toLowerCase() === cartProduct.name.toLocaleLowerCase());
    verifiedProduct && checkoutProducts.push({
      price: verifiedProduct.default_price,
      quantity: cartProduct.quantity,
    })
  })

  console.log('===== checkoutProducts', checkoutProducts)
  if (checkoutProducts) {
    const session = await stripe.checkout.sessions.create({
      line_items: checkoutProducts,
      mode: "payment",
      success_url: "http://localhost:3001/success",
      cancel_url: "http://localhost:3001/cancel"
    });
    return NextResponse.json({ url: session.url });
  }

  return NextResponse.json({ url: "http://localhost:3001" });
}