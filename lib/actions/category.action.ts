"use server";

import Category from "@/models/category.model";
import { CreateCategoryParams } from "@/types";
import { connectToDatabase } from "../mongoose";

export const createCategory = async ({
  categoryName,
}: CreateCategoryParams) => {
  try {
    connectToDatabase();
    const newCategory = await Category.create({ name: categoryName });
    return JSON.parse(JSON.stringify(newCategory));
  } catch (error) {
    console.log(error);
  }
};

export const getAllCategories = async () => {
  try {
    connectToDatabase();
    const categories = await Category.find({});
    // return JSON.parse(JSON.stringify(categories));
    console.log(categories);
  } catch (error) {
    console.log(error);
  }
};
