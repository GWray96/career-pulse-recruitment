import { NextResponse } from 'next/server'
import { z } from 'zod'

const employerFormSchema = z.object({
  companyName: z.string().min(1),
  contactName: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email(),
  website: z.string().url().optional().or(z.literal('')),
  companySize: z.string().min(1),
  jobTitle: z.string().min(1),
  jobType: z.enum(['skilled', 'unskilled']),
  employmentType: z.enum(['full-time', 'part-time', 'contract']),
  jobDescription: z.string().min(1),
  location: z.string().min(1),
  salaryMin: z.string().min(1),
  salaryMax: z.string().min(1),
  requiredSkills: z.string().min(1),
  applicationDeadline: z.string().min(1),
  referralSource: z.string().min(1),
  specialRequirements: z.string().optional(),
  termsAccepted: z.literal(true),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = employerFormSchema.parse(body)

    // TODO: Add your database integration here
    // For now, we'll just log the data
    console.log('Received employer form submission:', validatedData)

    // TODO: Send email notification
    // TODO: Store in database
    // TODO: Integrate with CRM if needed

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Invalid form data', errors: error.errors },
        { status: 400 }
      )
    }

    console.error('Error processing employer form:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
} 