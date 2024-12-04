"use server";

import { db } from "@/db/drizzle";
import { surgery } from "@/db/schema";
import { revalidatePath } from "next/cache";

export const create = async (formData: FormData) => {
  const description = formData.get("description") as string;
  const urgent = formData.get("urgent") as string;
  //const ep = parseInt((formData.get('ep') as string))
  const ep = formData.get("ep") as unknown as boolean;

  await db.insert(surgery).values({
    description: description,
    urgent: urgent,
    ep: ep,
  });

  revalidatePath("/alus");
};

export const getData = async () => {
  const data = await db.select().from(surgery);
  return data;
};
