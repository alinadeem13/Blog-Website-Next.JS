// app.tsx
import { getSortedPostsData } from "@/lib/posts";
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer'; // Import Footer

export default async function Home() {
  const posts = getSortedPostsData();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow grid grid-cols-1 gap-4 p-8">
        <h1 className="text-3xl font-bold text-center mb-4">My Blog</h1>
        
        {/* Full-width image with smaller height */}
        <div className="w-full h-full overflow-hidden mb-4">
          <img 
            src="/images/blog.jpeg" 
            alt="Blog cover"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              id={post.id}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              image={post.image}
            />
          ))}
        </div>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
