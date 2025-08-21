export interface IPartnership {
  fullName: string
  email: string
  phone: string
  companyName: string
  companyWebsite: string
  country: string
  industrySector: string
  projectDescription: string
  collaborationType: string
  collaborationGoals: string
  howDidYouHearAboutUs?: string | null
  isThereAnythingElseYouWouldLikeUsToKnow?: string | null
}

export interface IContactUs {
  name: string
  email: string
  subject: string
  message: string
}
