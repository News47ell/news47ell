import React, { FC, ReactNode } from 'react'

import { CheckIcon } from '@/components/icons'
type Props = {
	readonly children: ReactNode
}

export const Success: FC<Props> = ({ children }) => {
	return (
		<div className="mb-5">
			<div className="bg-green-500 px-4 py-2 font-bold text-white">
				<span className="m-auto flex flex-row gap-1 font-semibold">
					{<CheckIcon className="fill-white" />} Success
				</span>
			</div>
			<div className="border border-t-0 border-green-400 bg-green-100 px-4 py-3 text-gray-700">
				{children}
			</div>
		</div>
	)
}
