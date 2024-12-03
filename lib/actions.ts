"use server";

import { db } from "@/db/drizzle";
import { surgery } from "@/db/schema";
import { revalidatePath } from "next/cache";

export const create = async (formData: FormData) => {
  const urgent = formData.get("urgent");
  const description = formData.get("description");
  const prosthesis = formData.get("prosthesis");

  await db.insert(surgery).values({
    urgent,
    description,
    prosthesis,
  });

  revalidatePath("/alus");
};

export const getData = async () => {
  const data = await db.select().from(surgery);
  return data;
};
