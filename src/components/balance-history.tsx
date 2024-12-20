import {
	XAxis,
	YAxis,
	ResponsiveContainer,
	AreaChart,
	CartesianGrid,
	Area,
} from "recharts";

const data = [
	{ month: "Jul", balance: 150 },
	{ month: "Aug", balance: 315 },
	{ month: "Sep", balance: 450 },
	{ month: "Oct", balance: 750 },
	{ month: "Nov", balance: 250 },
	{ month: "Dec", balance: 550 },
	{ month: "Jan", balance: 650 },
];

export function BalanceHistory() {
	return (
		<div className="w-[635px] h-[276px] bg-background rounded-3xl py-[30px] px-[20px]">
			<ResponsiveContainer className="">
				<AreaChart
					data={data}
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
						tick={{ fill: "#718EBF", fontSize: 12, fontWeight: 400 }}
					/>
					<YAxis
						axisLine={false}
						tickLine={true}
						domain={[0, 800]}
						ticks={[0, 200, 400, 600, 800]}
						tickMargin={0}
						tick={{ fill: "#718EBF", fontSize: 12, fontWeight: 500 }}
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
