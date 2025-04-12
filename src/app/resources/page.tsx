import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Resources | Career Pulse',
  description: 'Access valuable resources, guides, and tools to help you succeed in your recruitment and career journey.',
};

const ResourcesPage = () => {
  // Sample resources - in a real app, these would come from a CMS or API
  const resources = [
    {
      id: 1,
      title: 'Resume Writing Guide',
      description: 'Learn how to create a compelling resume that stands out to employers and highlights your key skills and achievements.',
      category: 'Career Development',
      type: 'PDF Guide',
      image: '/images/backgrounds/annie-spratt-QckxruozjRg-unsplash.jpg',
      link: '#',
    },
    {
      id: 2,
      title: 'Interview Preparation Checklist',
      description: 'A comprehensive checklist to help you prepare for job interviews and make a strong impression on potential employers.',
      category: 'Job Search',
      type: 'Checklist',
      image: '/images/backgrounds/austin-distel-mpN7xjKQ_Ns-unsplash (1).jpg',
      link: '#',
    },
    {
      id: 3,
      title: 'Salary Negotiation Tips',
      description: 'Strategies and tips to help you negotiate a competitive salary and benefits package during the job offer process.',
      category: 'Career Development',
      type: 'Video',
      image: '/images/backgrounds/cherrydeck-05gac-Qn0k4-unsplash.jpg',
      link: '#',
    },
    {
      id: 4,
      title: 'Employer Branding Toolkit',
      description: 'A collection of templates and guides to help you build and promote your employer brand to attract top talent.',
      category: 'Employer Resources',
      type: 'Toolkit',
      image: '/images/backgrounds/linkedin-sales-solutions-1A8yP_5msac-unsplash.jpg',
      link: '#',
    },
    {
      id: 5,
      title: 'Remote Work Best Practices',
      description: 'Guidelines and best practices for managing remote teams and creating an effective remote work culture.',
      category: 'Employer Resources',
      type: 'Guide',
      image: '/images/backgrounds/austin-distel-VvAcrVa56fc-unsplash.jpg',
      link: '#',
    },
    {
      id: 6,
      title: 'Diversity & Inclusion Guide',
      description: 'Learn how to create inclusive hiring practices and build diverse teams that drive innovation and success.',
      category: 'Employer Resources',
      type: 'Guide',
      image: '/images/backgrounds/the-jopwell-collection-YBMt6ETGTWA-unsplash.jpg',
      link: '#',
    },
  ];

  // Resource categories for filtering
  const categories = [
    'All Resources',
    'Career Development',
    'Job Search',
    'Employer Resources',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Career Pulse Resources
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Access valuable tools, guides, and resources to help you succeed in your recruitment and career journey.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-primary hover:text-white transition-colors duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-lg shadow-soft overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="relative h-48">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-primary rounded-full">
                      {resource.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-white rounded-full">
                      {resource.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-montserrat font-bold text-gray-900 mb-3">
                    {resource.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {resource.description}
                  </p>
                  <Link 
                    href={resource.link}
                    className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors duration-200"
                  >
                    Download Resource
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
              Additional Resources
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our curated collection of external resources to further enhance your recruitment and career development journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <h3 className="text-lg font-montserrat font-bold text-gray-900 mb-3">
                Industry Reports
              </h3>
              <p className="text-gray-600 mb-4">
                Access the latest recruitment and employment industry reports and statistics.
              </p>
              <Link href="#" className="text-primary hover:text-primary-dark font-medium">
                View Reports →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <h3 className="text-lg font-montserrat font-bold text-gray-900 mb-3">
                Webinars
              </h3>
              <p className="text-gray-600 mb-4">
                Watch on-demand webinars featuring industry experts and thought leaders.
              </p>
              <Link href="#" className="text-primary hover:text-primary-dark font-medium">
                Browse Webinars →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <h3 className="text-lg font-montserrat font-bold text-gray-900 mb-3">
                Podcasts
              </h3>
              <p className="text-gray-600 mb-4">
                Listen to our podcast series covering recruitment trends and career advice.
              </p>
              <Link href="#" className="text-primary hover:text-primary-dark font-medium">
                Listen Now →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <h3 className="text-lg font-montserrat font-bold text-gray-900 mb-3">
                Community
              </h3>
              <p className="text-gray-600 mb-4">
                Join our community of recruiters and job seekers to share insights and experiences.
              </p>
              <Link href="#" className="text-primary hover:text-primary-dark font-medium">
                Join Community →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage; 