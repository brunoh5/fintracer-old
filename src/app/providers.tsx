'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ReactNode } from 'react'

import { DialogProvider } from './dialog-provider'
import { queryClient } from '@lib/react-query'

export default function Providers({ children }: { children: ReactNode }) {
	return (
		<QueryClientProvider client={queryClient}>
			<NextThemesProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				<DialogProvider />
				{children}
			</NextThemesProvider>
		</QueryClientProvider>
	)
}
