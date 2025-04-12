'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const searchSchema = z.object({
  keyword: z.string().optional(),
  location: z.string().optional(),
  jobType: z.enum(['full-time', 'part-time', 'contract', 'all']).optional(),
})

type SearchFormData = z.infer<typeof searchSchema>

export default function JobSearch() {
  const [searchResults, setSearchResults] = useState([])
  const { register, handleSubmit, formState: { errors } } = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema)
  })

  const onSubmit = (data: SearchFormData) => {
    // TODO: Implement job search functionality
    console.log('Search data:', data)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-8">Find Your Next Opportunity</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <input
              {...register('keyword')}
              placeholder="Job title or keyword"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <input
              {...register('location')}
              placeholder="Location"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <select
              {...register('jobType')}
              className="select select-bordered w-full"
            >
              <option value="all">All Types</option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="contract">Contract</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Search Jobs
        </button>
      </form>

      <div className="space-y-4">
        {searchResults.length === 0 ? (
          <p className="text-center text-gray-500">
            No jobs found. Try adjusting your search criteria.
          </p>
        ) : (
          searchResults.map((job: any) => (
            <div key={job.id} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{job.title}</h2>
                <p>{job.company}</p>
                <p>{job.location}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Apply Now</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
} 