import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

// Define the structure of a Post
interface Post {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    image: string; // Image property
}

// Function to get sorted posts data
export function getSortedPostsData(): Post[] {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData: Post[] = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
            excerpt: matterResult.data.excerpt,
            image: matterResult.data.image || '', // Extract image property
        } as Post;
    });

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Function to get individual post data
export async function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
        id,
        contentHtml: matterResult.content,
        title: matterResult.data.title,
        date: matterResult.data.date,
        image: matterResult.data.image || '', // Add image property here
    };
}
