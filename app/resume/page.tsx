'use client'

import { LoaderIcon } from '@/components/icons'
import { SectionContainer } from '@/components/UI'
import { PageTitle } from '@/components/UI'
import { useResume } from '@/hooks/useGitHub'
import ResumeLayout from '@/layouts/ResumeLayout'

export default function Resume() {
	const { resume, isLoading } = useResume()

	const { basics, education, skills, languages, certificates } = resume

	if (isLoading) {
		return (
			<SectionContainer className="print:my-0">
				<div className="text-center print:hidden">
					<PageTitle>Resume</PageTitle>
				</div>
				<div className="flex justify-center">
					<LoaderIcon className="h-10 w-10 animate-spin fill-nfh-accent-primary" />
				</div>
			</SectionContainer>
		)
	}

	return (
		<ResumeLayout
			basics={basics}
			education={education}
			skills={skills}
			languages={languages}
			certificates={certificates}
		/>
	)
}
