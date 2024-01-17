import { revalidateTag } from "next/cache";

export default async function action() {
  revalidateTag("course-list");
}