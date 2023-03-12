import { PDFIcon } from '@/components/icons'
import { default as Image } from '@/components/Image'
import { default as Link } from '@/components/Link'
import { SectionContainer } from '@/components/UI'
import { PageTitle } from '@/components/UI'
import type { Blog } from '@/contentlayer/generated'
import { getBlogHomepage } from '@/lib/contentlayer'
import { IResumeLayout } from '@/lib/interfaces'

export default function ResumeLayout({
	basics,
	education,
	skills,
	languages,
	certificates,
}: IResumeLayout) {
	const sortedPosts = getBlogHomepage().slice(0, 5) as Blog[]

	const isFirefoxForAndroid = () => {
		const ua = navigator.userAgent.toLowerCase()
		return ua.indexOf('android') > -1 && ua.indexOf('firefox') > -1
	}
	const printResume = () => {
		if (!isFirefoxForAndroid()) {
			if (typeof window !== 'undefined') {
				window.print()
			}
		} else {
			if (navigator.share) {
				try {
					navigator.share({
						title: 'Ahmet ALMAZ - Resume',
						url: 'https://news47ell.com/resume',
					})
				} catch (err) {
					console.error('Error: ' + err)
				}
			}
		}
	}

	return (
		<SectionContainer className="print:my-0">
			<div className="text-center print:hidden">
				<PageTitle>Resume</PageTitle>
			</div>
			<div className="mt-20 border border-nfh-accent-primary text-nfh-text-primary">
				<div className="grid grid-cols-1 p-8">
					<div className="relative">
						<div className="absolute inset-x-0 top-0 mx-auto -mt-24 flex h-36 w-36 items-center justify-center rounded-full">
							<Image
								src={basics.image}
								alt={basics.name}
								width={144}
								height={144}
								className="h-36 w-36 rounded-full"
							/>
						</div>
					</div>
				</div>
				<div className="flex justify-evenly space-x-8 md:mt-12">
					<Link className="text-sm" href={`mailto:${basics.email}`} aria-label="Email address">
						{basics.email}
					</Link>
					<Link className="text-sm" href={basics.url} aria-label="Link to news47ell.com">
						{basics.url}
					</Link>
				</div>
				<div className="flex justify-evenly space-x-8 md:mt-12">
					{basics.profiles.map(({ id, network, url }) => (
						<div key={id}>
							<Link key={id} className="text-sm" href={url}>
								{network}
							</Link>
						</div>
					))}
				</div>
				<div className="text-center print:py-0 md:py-5">
					<h1 className="text-3xl font-medium">{basics.name}</h1>
					<p className="cursor-none font-light text-türkiye">{basics.location.country}</p>
					<p className="text-sm">{basics.label}</p>
					{education.map(({ id, institution, area }) => (
						<p key={id} className="text-sm sm:col-span-2">
							{institution} | {area}
						</p>
					))}
				</div>
				<div className="flex flex-col justify-center p-3">
					<p className="text-center font-light lg:px-16">{basics.summary}</p>
				</div>
				<div className="flex flex-col justify-center">
					{skills.map(({ id, name, keywords }) => (
						<div key={id} className="p-6 print:p-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<p className="text-sm font-semibold">{name}</p>
							<p className="mt-1 text-sm sm:col-span-2 sm:mt-0">{keywords.join(', ')}</p>
						</div>
					))}
					<div className="p-6 print:p-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<p className="text-sm font-semibold">Languages</p>
						<ul className="mt-1 text-sm sm:col-span-2 sm:mt-0">
							{languages.map(({ id, language, fluency }) => (
								<li key={id} className="mt-1 text-sm sm:mt-0">
									<p className="mt-1 text-sm sm:mt-0">
										{language} | {fluency}
									</p>
								</li>
							))}
						</ul>
					</div>
					<div className="p-6 print:p-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<p className="text-sm font-semibold">Certificates</p>
						<ul className="mt-1 text-sm sm:col-span-2 sm:mt-0">
							{certificates
								.sort((a, b) => {
									return new Date(b.issued).getTime() - new Date(a.issued).getTime()
								})
								.slice(0, 5)
								.map(({ id, name, issuer, url }) => (
									<li key={id} className="mt-1 text-sm sm:mt-0">
										<p className="mt-1 text-sm sm:mt-0">
											{name} |{' '}
											<Link href={url} aria-label={`Link to ${name}`}>
												{issuer}
											</Link>
										</p>
									</li>
								))}
							<li className="mt-1 text-sm sm:mt-0">
								<p className="mt-1 text-sm sm:mt-0">
									<Link href="/certificates" aria-label="Link to Certificates page">
										For a complete list of certificates, click here.
									</Link>
								</p>
							</li>
						</ul>
					</div>
					<div className="p-6 print:p-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<p className="text-sm font-semibold">Recent Blog Posts</p>
						<ul className="mt-1 text-sm sm:col-span-2 sm:mt-0">
							{sortedPosts.map((post, index) => (
								<li key={index} className="mt-1 text-sm sm:mt-0">
									<Link href={post.slug} aria-label={`Link to ${post.title}`}>
										{post.title}
									</Link>
								</li>
							))}
							<li className="mt-1 text-sm sm:mt-0">
								<p className="mt-1 text-sm sm:mt-0">
									<Link href="/blog" aria-label="Link to Certificates page">
										For a complete list of blog posts, click here.
									</Link>
								</p>
							</li>
						</ul>
					</div>
					<div className="p-6 print:hidden print:p-3 print:py-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<p className="text-sm font-medium print:hidden">Attachments</p>
						<div className="mt-1 text-sm sm:col-span-2 sm:mt-0">
							<div className="rounded-md border border-nfh-accent-primary print:hidden">
								<div
									onClick={printResume}
									className="flex items-center justify-between py-3 pr-4 pl-3 text-sm"
								>
									<div className="flex w-0 flex-1 items-center">
										<PDFIcon className="h-7 w-7 fill-nfh-accent-primary" />
										<span className="ml-2 w-0 flex-1 truncate">Download as PDF</span>
									</div>
									<div className="ml-4 shrink-0">
										<button className="font-medium text-nfh-accent-primary hover:text-nfh-text-secondary">
											Download
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</SectionContainer>
	)
}
