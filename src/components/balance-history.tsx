import {
	XAxis,
	YAxis,
	ResponsiveContainer,
	AreaChart,
	CartesianGrid,
	Area,
} from "recharts";
import { cn } from "@/lib/utils";
import { BALANCE_HISTORY } from "@/mocks";

export function BalanceHistory() {
	return (
		<div
			className={cn(
				"bg-background rounded-3xl",
				"aspect-[325/223]",
				"desktop:py-[30px] desktop:px-[20px] desktop:aspect-[635/276]",
			)}
		>
			<ResponsiveContainer className="">
				<AreaChart
					data={BALANCE_HISTORY}
					margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
				>
					<defs>
						<linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
							<stop offset="50%" stopColor="#2d61ff" stopOpacity={0.3} />
							<stop offset="95%" stopColor="#2d61ff" stopOpacity={0} />
						</linearGradient>
					</defs>

					<XAxis
						dataKey="month"
						axisLine={false}
						tickLine={true}
						tick={{ fill: "var(--secondary)", fontSize: 12, fontWeight: 400 }}
					/>
					<YAxis
						axisLine={false}
						tickLine={true}
						domain={[0, 800]}
						ticks={[0, 200, 400, 600, 800]}
						tickMargin={0}
						tick={{ fill: "var(--secondary)", fontSize: 12, fontWeight: 500 }}
						width={30}
					/>

					<CartesianGrid
						strokeDasharray="3 3"
						vertical={true}
						stroke="#e5e7eb"
					/>

					<Area
						type="monotone"
						dataKey="balance"
						stroke="#1814F3"
						strokeWidth={3}
						fill="url(#colorBalance)"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
}
