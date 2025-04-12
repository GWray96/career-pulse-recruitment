'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import Container from '@/components/ui/Container'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'

const companyDetailsSchema = z.object({
  companyName: z.string().min(1, 'Company name is required'),
  contactName: z.string().min(1, 'Contact name is required'),
  phone: z.string().min(1, 'Phone number is required'),
  email: z.string().email('Invalid email address'),
  website: z.string().url('Invalid website URL').optional().or(z.literal('')),
  companySize: z.string().min(1, 'Company size is required'),
})

const jobDetailsSchema = z.object({
  jobTitle: z.string().min(1, 'Job title is required'),
  jobType: z.enum(['skilled', 'unskilled']),
  employmentType: z.enum(['full-time', 'part-time', 'contract']),
  jobDescription: z.string().min(1, 'Job description is required'),
  location: z.string().min(1, 'Location is required'),
  salaryMin: z.string().min(1, 'Minimum salary is required'),
  salaryMax: z.string().min(1, 'Maximum salary is required'),
  requiredSkills: z.string().min(1, 'Required skills are required'),
  applicationDeadline: z.string().min(1, 'Application deadline is required'),
})

const additionalInfoSchema = z.object({
  referralSource: z.string().min(1, 'Please select how you heard about us'),
  specialRequirements: z.string().optional(),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: 'You must accept the terms and conditions' }),
  }),
})

type FormData = z.infer<typeof companyDetailsSchema> &
  z.infer<typeof jobDetailsSchema> &
  z.infer<typeof additionalInfoSchema>

export default function EmployerForm() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(
      step === 1
        ? companyDetailsSchema
        : step === 2
        ? jobDetailsSchema
        : additionalInfoSchema
    ),
  })

  const onSubmit = async (data: FormData) => {
    if (step < 3) {
      setStep(step + 1)
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/submit-employer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      router.push('/thank-you')
    } catch (error) {
      console.error('Error submitting form:', error)
      // Handle error (show toast notification, etc.)
    } finally {
      setIsSubmitting(false)
    }
  }

  const companySizeOptions = [
    { value: '1-10', label: '1-10 employees' },
    { value: '11-50', label: '11-50 employees' },
    { value: '51-200', label: '51-200 employees' },
    { value: '201-500', label: '201-500 employees' },
    { value: '500+', label: '500+ employees' },
  ]

  const jobTypeOptions = [
    { value: 'skilled', label: 'Skilled' },
    { value: 'unskilled', label: 'Unskilled' },
  ]

  const employmentTypeOptions = [
    { value: 'full-time', label: 'Full-time' },
    { value: 'part-time', label: 'Part-time' },
    { value: 'contract', label: 'Contract' },
  ]

  const referralSourceOptions = [
    { value: 'google', label: 'Google Search' },
    { value: 'linkedin', label: 'LinkedIn' },
    { value: 'referral', label: 'Referral' },
    { value: 'other', label: 'Other' },
  ]

  return (
    <>
      <Header />
      <main className="py-16">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                Post a Job
              </h1>
              <p className="mt-2 text-gray-600">
                Fill out the form below to post your job opening.
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-between">
                {[1, 2, 3].map((stepNumber) => (
                  <div
                    key={stepNumber}
                    className={`flex items-center ${
                      stepNumber < 3 ? 'flex-1' : ''
                    }`}
                  >
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${
                        step >= stepNumber
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {stepNumber}
                    </div>
                    {stepNumber < 3 && (
                      <div
                        className={`h-1 flex-1 ${
                          step > stepNumber ? 'bg-blue-600' : 'bg-gray-200'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-between text-sm">
                <span>Company Details</span>
                <span>Job Details</span>
                <span>Additional Info</span>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {step === 1 && (
                <div className="space-y-6">
                  <Input
                    label="Company Name"
                    error={errors.companyName?.message}
                    {...register('companyName')}
                  />
                  <Input
                    label="Contact Name"
                    error={errors.contactName?.message}
                    {...register('contactName')}
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    error={errors.phone?.message}
                    {...register('phone')}
                  />
                  <Input
                    label="Email"
                    type="email"
                    error={errors.email?.message}
                    {...register('email')}
                  />
                  <Input
                    label="Company Website"
                    type="url"
                    error={errors.website?.message}
                    {...register('website')}
                  />
                  <Select
                    label="Company Size"
                    options={companySizeOptions}
                    error={errors.companySize?.message}
                    {...register('companySize')}
                  />
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <Input
                    label="Job Title"
                    error={errors.jobTitle?.message}
                    {...register('jobTitle')}
                  />
                  <Select
                    label="Job Type"
                    options={jobTypeOptions}
                    error={errors.jobType?.message}
                    {...register('jobType')}
                  />
                  <Select
                    label="Employment Type"
                    options={employmentTypeOptions}
                    error={errors.employmentType?.message}
                    {...register('employmentType')}
                  />
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Job Description
                    </label>
                    <textarea
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      rows={4}
                      {...register('jobDescription')}
                    />
                    {errors.jobDescription?.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.jobDescription.message}
                      </p>
                    )}
                  </div>
                  <Input
                    label="Location"
                    error={errors.location?.message}
                    {...register('location')}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="Minimum Salary"
                      type="number"
                      error={errors.salaryMin?.message}
                      {...register('salaryMin')}
                    />
                    <Input
                      label="Maximum Salary"
                      type="number"
                      error={errors.salaryMax?.message}
                      {...register('salaryMax')}
                    />
                  </div>
                  <Input
                    label="Required Skills"
                    error={errors.requiredSkills?.message}
                    {...register('requiredSkills')}
                  />
                  <Input
                    label="Application Deadline"
                    type="date"
                    error={errors.applicationDeadline?.message}
                    {...register('applicationDeadline')}
                  />
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <Select
                    label="How did you hear about us?"
                    options={referralSourceOptions}
                    error={errors.referralSource?.message}
                    {...register('referralSource')}
                  />
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Special Requirements
                    </label>
                    <textarea
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      rows={4}
                      {...register('specialRequirements')}
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      {...register('termsAccepted')}
                    />
                    <label className="ml-2 block text-sm text-gray-900">
                      I accept the terms and conditions
                    </label>
                  </div>
                  {errors.termsAccepted?.message && (
                    <p className="text-sm text-red-600">
                      {errors.termsAccepted.message}
                    </p>
                  )}
                </div>
              )}

              <div className="flex justify-between pt-6">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                  >
                    Previous
                  </Button>
                )}
                <Button
                  type="submit"
                  className="ml-auto"
                  isLoading={isSubmitting}
                >
                  {step === 3 ? 'Submit' : 'Next'}
                </Button>
              </div>
            </form>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
} 