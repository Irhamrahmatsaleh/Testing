import { z } from "zod";

const MAX_FILE_SIZE = 500000; // 5mb
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const createThreadSchema = z.object({
  content: z.string().min(1).max(280),
  image: z
    .any()
    // .refine((files) => files?.length == 1, "Image is required.")
    // .refine(
    //   (files) => files?.[0]?.size <= MAX_FILE_SIZE,
    //   `Max file size is 5MB.`
    // )
    // .refine(
    //   (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
    //   ".jpg, .jpeg, .png and .webp files are accepted."
    // )
    ,
});