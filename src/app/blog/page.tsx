import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Blog | Career Pulse',
  description: 'Stay updated with the latest insights, trends, and advice in recruitment and career development.',
};

const BlogPage = () => {
  // Sample blog posts - in a real app, these would come from a CMS or API
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Remote Work: What Employers Need to Know',
      excerpt: 'Explore how remote work is reshaping the recruitment landscape and what employers should consider when building remote teams.',
      category: 'Remote Work',
      date: 'June 15, 2023',
      readTime: '5 min read',
      image: '/images/backgrounds/austin-distel-VvAcrVa56fc-unsplash.jpg',
      slug: 'future-of-remote-work',
    },
    {
      id: 2,
      title: 'How AI is Transforming the Recruitment Process',
      excerpt: 'Discover how artificial intelligence is revolutionizing talent acquisition and what it means for both employers and job seekers.',
      category: 'Technology',
      date: 'June 10, 2023',
      readTime: '7 min read',
      image: '/images/backgrounds/kaleidico-7lryofJ0H9s-unsplash.jpg',
      slug: 'ai-in-recruitment',
    },
    {
      id: 3,
      title: 'Building a Strong Employer Brand in 2023',
      excerpt: 'Learn the essential strategies for creating an employer brand that attracts top talent and fosters employee loyalty.',
      category: 'Employer Branding',
      date: 'June 5, 2023',
      readTime: '6 min read',
      image: '/images/backgrounds/linkedin-sales-solutions-1A8yP_5msac-unsplash.jpg',
      slug: 'employer-branding-2023',
    },
    {
      id: 4,
      title: 'The Rise of Skills-Based Hiring: Why Experience Isn\'t Everything',
      excerpt: 'Explore why more companies are shifting to skills-based hiring and how this approach can lead to more diverse and effective teams.',
      category: 'Hiring Trends',
      date: 'May 30, 2023',
      readTime: '8 min read',
      image: '/images/backgrounds/christina-wocintechchat-com-Q80LYxv_Tbs-unsplash.jpg',
      slug: 'skills-based-hiring',
    },
    {
      id: 5,
      title: 'How to Create an Inclusive Job Description',
      excerpt: 'Learn how to write job descriptions that attract diverse candidates and avoid unconscious bias in your recruitment process.',
      category: 'Diversity & Inclusion',
      date: 'May 25, 2023',
      readTime: '4 min read',
      image: '/images/backgrounds/the-jopwell-collection-D6JvOZkwT3g-unsplash.jpg',
      slug: 'inclusive-job-descriptions',
    },
    {
      id: 6,
      title: 'The Impact of Employee Benefits on Recruitment',
      excerpt: 'Discover how offering competitive benefits can help you attract and retain top talent in today\'s competitive job market.',
      category: 'Employee Benefits',
      date: 'May 20, 2023',
      readTime: '6 min read',
      image: '/images/backgrounds/smartworks-coworking-cW4lLTavU80-unsplash.jpg',
      slug: 'employee-benefits-recruitment',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Career Pulse Blog
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Insights, trends, and advice to help you navigate the world of recruitment and career development.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-soft overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-primary rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-montserrat font-bold text-gray-900 mb-3">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors duration-200">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors duration-200"
                  >
                    Read More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-soft p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-600 mb-8">
                Get the latest recruitment insights and career advice delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage; 