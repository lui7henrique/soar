import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { v4 } from "uuid";

const data = [
	{ name: "Entertainment", value: 30 },
	{ name: "Investment", value: 20 },
	{ name: "Bill Expense", value: 30 },
	{ name: "Others", value: 15 },
];

const COLORS = [
	"hsl(232, 45%, 35%)",
	"hsl(221, 83%, 53%)",
	"hsl(28, 100%, 50%)",
	"hsl(0, 0%, 9%)",
];

export function ExpenseStatistics() {
	const renderCustomLabel = ({
		cx,
		cy,
		midAngle,
		innerRadius,
		outerRadius,
		percent,
		name,
		// biome-ignore lint/suspicious/noExplicitAny: by default the recharts typing is "any" in these cases
	}: any) => {
		const RADIAN = Math.PI / 180;
		const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
		const x = cx + radius * Math.cos(-midAngle * RADIAN);
		const y = cy + radius * Math.sin(-midAngle * RADIAN);

		return (
			<text
				x={x}
				y={y}
				textAnchor="middle"
				dominantBaseline="middle"
				className="text-xs font-bold"
			>
				<tspan x={x} y={y - 8} fill="white">
					{`${(percent * 100).toFixed(0)}%`}
				</tspan>

				<tspan x={x} y={y + 8} fill="white">
					{name}
				</tspan>
			</text>
		);
	};

	return (
		<div className="aspect-[350/322] bg-background rounded-3xl">
			<ResponsiveContainer width="100%" height="100%">
				<PieChart>
					<Pie
						data={data}
						labelLine={false}
						label={renderCustomLabel}
						dataKey="value"
						className="outline-none"
					>
						{data.map((_entry, index) => (
							<Cell
								key={v4()}
								fill={COLORS[index % COLORS.length]}
								stroke="#ffffff"
								strokeWidth={8}
								className="outline-none"
							/>
						))}
					</Pie>
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
}
