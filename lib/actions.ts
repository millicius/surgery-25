"use server";

import { db } from "@/db/drizzle";
import { surgery } from "@/db/schema";
import { revalidatePath } from "next/cache";

export const create = async (formData: FormData) => {
  const description = formData.get("description");
  const urgent = formData.get("urgent");

  await db.insert(surgery).values({
    description: description as string,
    urgent: urgent as string,
  });

  revalidatePath("/alus");
};

export const getData = async () => {
  const data = await db.select().from(surgery);
  return data;
};
