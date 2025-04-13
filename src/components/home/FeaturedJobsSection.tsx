import { MouseEvent } from 'react';

interface JobProps {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  logo: string;
  tags: string[];
  description: string;
}

export default function FeaturedJobsSection() {
  const jobs: JobProps[] = [
    {
      id: "job1",
      title: "UX/UI Designer",
      company: "TechSolutions Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$95,000 - $120,000",
      posted: "2 days ago",
      logo: "/images/logos/techsolutions.svg",
      tags: ["Design", "UX", "Figma", "Adobe XD"],
      description: "We're looking for a talented UX/UI Designer to join our product team and help create beautiful, intuitive interfaces."
    },
    {
      id: "job2",
      title: "Data Scientist",
      company: "AnalyticsPro",
      location: "New York, NY",
      type: "Full-time",
      salary: "$110,000 - $140,000",
      posted: "3 days ago",
      logo: "/images/logos/analyticspro.svg",
      tags: ["Python", "Machine Learning", "SQL", "Data Visualization"],
      description: "Join our data science team to develop advanced analytics solutions for our Fortune 500 clients."
    },
    {
      id: "job3",
      title: "DevOps Engineer",
      company: "CloudNative Systems",
      location: "Remote",
      type: "Full-time",
      salary: "$105,000 - $135,000",
      posted: "1 week ago",
      logo: "/images/logos/cloudnative.svg",
      tags: ["Kubernetes", "AWS", "CI/CD", "Docker"],
      description: "Help us build and maintain our cloud infrastructure and deployment pipelines for high-traffic applications."
    },
    {
      id: "job4",
      title: "Frontend Developer",
      company: "WebWorks Agency",
      location: "Boston, MA",
      type: "Full-time",
      salary: "$90,000 - $115,000",
      posted: "5 days ago",
      logo: "/images/logos/webworks.svg",
      tags: ["React", "TypeScript", "CSS", "NextJS"],
      description: "Create modern, responsive web applications with our creative team for a diverse client base."
    }
  ];

  const handleJobClick = (e: MouseEvent, jobId: string) => {
    e.preventDefault();
    // Navigate to job detail page
    console.log(`Navigate to job ${jobId}`);
    // In a real app, you'd use router.push(`/jobs/${jobId}`) or similar
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-0">
            Featured Opportunities
          </h2>
          <a 
            href="/jobs" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-300"
          >
            View All Jobs
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobs.map((job) => (
            <a 
              key={job.id}
              href={`/jobs/${job.id}`}
              onClick={(e) => handleJobClick(e, job.id)}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full border border-gray-100"
            >
              <div className="p-6 flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gray-100 rounded-md w-12 h-12 flex items-center justify-center">
                    <span className="font-bold text-primary-600">{job.company.charAt(0)}</span>
                  </div>
                  <span className="text-sm text-gray-500">{job.posted}</span>
                </div>
                
                <h3 className="font-bold text-xl text-gray-800 mb-2 line-clamp-2">{job.title}</h3>
                <p className="text-gray-600 mb-2">{job.company}</p>
                <div className="flex items-center mb-3">
                  <svg className="w-4 h-4 text-gray-400 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-sm text-gray-500 line-clamp-1">{job.location}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-primary-50 text-primary-600 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                  {job.tags.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{job.tags.length - 2}
                    </span>
                  )}
                </div>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{job.description}</p>
              </div>
              
              <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-between items-center">
                <span className="font-medium text-primary-600">{job.salary}</span>
                <span className="text-sm text-gray-500">{job.type}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 