import Link from "next/link";

// Define the structure of a Post
interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
}

// Define the props for the PostCard component
interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <h2 className="text-xl font-bold">
        <Link href={`/posts/${post.id}`}>
          {post.title}
        </Link>
      </h2>
      <p className="text-gray-500">{post.date}</p>
      <p className="mt-2">{post.excerpt}</p>
    </div>
  );
};

export default PostCard;
