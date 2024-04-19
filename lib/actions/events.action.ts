"use server";

import { CreateEventParams } from "@/types";
import { connectToDatabase } from "../mongoose";
import User from "@/models/userModel";
import Event from "@/models/eventModel";

export const createEvent = async ({
  event,
  userId,
  path,
}: any) => {
  try {
    await connectToDatabase();

    const organizer = await User.findById(userId);

    if (!organizer) throw new Error("Organizer not found");

    const newEvent = await Event.create({
      ...event,
      category: event.categoryId,
      organizer: userId,
    });

    return JSON.parse(JSON.stringify(newEvent));
  } catch (error) {
    console.log(error);
  }
};
