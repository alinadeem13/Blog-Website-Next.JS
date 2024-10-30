import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { marked } from "marked";

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
  // Await the params object
  const resolvedParams = await params; // Awaiting the params object
  const post = await getPostData(resolvedParams.id); // Now using resolvedParams.id

  if (!post) return notFound();

  // Convert markdown to HTML using `marked`
  const parsedContent = marked(post.contentHtml);

  return (
    <article className="flex flex-col items-center px-4 py-8">
      {/* Display blog image in the center */}
      {post.image && (
        <div className="w-full max-w-3xl">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto object-cover mb-8 rounded-lg"
          />
        </div>
      )}

      <h1 className="text-4xl font-bold mb-4 text-center">{post.title}</h1>
      <time dateTime={post.date} className="text-gray-500 text-sm mb-4">
        {getFormattedDate(post.date)}
      </time>

      {/* Render blog content with parsed HTML */}
      <section
        className="prose max-w-3xl mx-auto"
        dangerouslySetInnerHTML={{ __html: parsedContent }}
      />

      <p className="mt-8">
        <Link href="/" className="text-blue-500 hover:underline">
          ← Back to home
        </Link>
      </p>
    </article>
  );
}
