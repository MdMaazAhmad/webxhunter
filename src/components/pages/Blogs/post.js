export const allPosts = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    title: `The Future of Web Development in ${2025 + Math.floor(i / 5)}`,
    slug: `future-of-web-dev-${i + 1}`,
    image: `https://placehold.co/600x400/1a202c/718096?text=Post+${i + 1}`,
    excerpt: 'A deep dive into the next generation of web technologies, frameworks, and design patterns shaping the digital landscape.',
    category: ['Tech', 'Design', 'Marketing', 'Business'][i % 4],
    tags: [['React', 'Next.js'], ['CSS', 'Tailwind'], ['SEO', 'Content'], ['Startups', 'Growth']][i % 4],
    date: new Date(2025, 0, 15 + i).toISOString(),
    featured: i < 3,
  }));
  
  export const POSTS_PER_PAGE = 5;