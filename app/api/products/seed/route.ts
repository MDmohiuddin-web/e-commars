import data from "@/app/lib/models/Data";
import bdConnect from "@/app/lib/models/dbConnect";
import ProductModel from "@/app/lib/models/ProdectModel";
import UserModel from "@/app/lib/models/UserModel";
import { NextRequest, NextResponse } from "next/server"; 
export const GET = async (request: NextRequest) => { 
  console.log('Route hit');

  const { users, Products } = data;
  await bdConnect();
  await UserModel.deleteMany();
  await UserModel.insertMany(users);
  await ProductModel.deleteMany();
  await ProductModel.insertMany(Products);

  return NextResponse.json({
    message: "Users inserted successfully",
    users,
    Products,
  });
};
