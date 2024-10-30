// components/BlogCard.tsx

import Link from "next/link";

interface BlogCardProps {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    image?: string; // Optional if you are including an image
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, date, excerpt, image }) => {
    return (
        <Link href={`/posts/${id}`} className="block border p-4 rounded-lg shadow-lg">
            {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />} {/* Conditional rendering for image */}
            <h2 className="text-xl font-bold">{title}</h2>
            <time className="text-gray-500">{new Date(date).toLocaleDateString()}</time>
            <p className="mt-2">{excerpt}</p>
        </Link>
    );
};

export default BlogCard;
