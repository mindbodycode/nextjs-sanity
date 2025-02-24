// src/app/(blog)/page.tsx

import { PostsPublisher } from "@/components/PostsPublisher";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
  const { data: posts } = await sanityFetch({
    query: POSTS_QUERY,
  });

  return <PostsPublisher posts={posts} />;
}
