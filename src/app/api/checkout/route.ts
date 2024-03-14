import { NextRequest, NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export const POST = async (request: NextRequest) => {

  const { data } = await request.json();

  const products = await stripe.products.list();
  console.log('connection test: products from stripe', products)

  return NextResponse.json({ url: "" });
  
}