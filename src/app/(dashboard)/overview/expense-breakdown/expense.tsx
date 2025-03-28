'use client'

import {
	Car,
	Clapperboard,
	Home,
	LayoutDashboard,
	ShoppingBag,
	Utensils,
} from 'lucide-react'
import type { ReactNode } from 'react'

import { ExpenseDiff } from './expense-diff'

interface ExpenseProps {
	title:
		| 'Alimentação'
		| 'Transporte'
		| 'Entretenimento'
		| 'Compras'
		| 'Outros'
		| 'Moradia'
	expense:
		| {
				category: string
				diffBetweenMonth: number
				amount: number
		  }
		| undefined
}

const transactionCategoryIconMap: Record<string, ReactNode> = {
	Alimentação: <Utensils />,
	Transporte: <Car />,
	Entretenimento: <Clapperboard />,
	Compras: <ShoppingBag />,
	Outros: <LayoutDashboard />,
	Moradia: <Home />,
}

export function Expense({ title, expense }: ExpenseProps) {
	let amount = 0
	let diffBetweenMonth = 0

	if (expense) {
		amount = expense.amount
		diffBetweenMonth = expense.diffBetweenMonth
	}

	return (
		<div className="grid grid-cols-[3rem_1fr_1.5rem] items-center px-4 py-2">
			<div className="flex h-14 w-12 items-center rounded-lg p-2">
				{transactionCategoryIconMap[title]}
			</div>
			<div className="flex items-center gap-4">
				<div className="flex flex-col">
					<span className="text-xs text-muted-foreground">{title}</span>
					<p className="font-semibold">
						{(amount < 0 ? (amount * -1) / 100 : amount / 100).toLocaleString(
							'pt-BR',
							{
								style: 'currency',
								currency: 'BRL',
							}
						)}
					</p>
					<ExpenseDiff diffBetweenMonth={diffBetweenMonth} />
				</div>
			</div>
		</div>
	)
}
