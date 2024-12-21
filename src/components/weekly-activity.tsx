import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { MOCK_WEEKLY_ACTIVITY } from "@/mocks";
import {
	Bar,
	BarChart,
	XAxis,
	YAxis,
	ResponsiveContainer,
	CartesianGrid,
	Legend,
} from "recharts";
import type { Props } from "recharts/types/component/DefaultLegendContent";
import { v4 } from "uuid";

const renderCustomLegend = (props: Props) => {
	const { payload } = props;

	return (
		<div className="flex justify-end gap-8">
			{payload?.map((entry) => (
				<span key={v4()} className="flex items-center gap-3">
					<span
						className="size-[12px] rounded-full"
						style={{ background: entry.color }}
					/>
					<span className="text-secondary text-xs first-letter:uppercase">
						{entry.value}
					</span>
				</span>
			))}
		</div>
	);
};

export function WeeklyActivity() {
	const isDesktop = useMediaQuery("(min-width: 1280px)");

	return (
		<div
			className={cn(
				"bg-background rounded-3xl aspect-[325/254]",
				"desktop:aspect-[730/322] desktop:h-[322px]",
			)}
		>
			<ResponsiveContainer className="desktop:p-8">
				<BarChart
					data={MOCK_WEEKLY_ACTIVITY}
					barGap={isDesktop ? 12 : 5}
					margin={{ left: 0, right: 0, bottom: 0, top: 0 }}
				>
					<Legend
						verticalAlign="top"
						align="right"
						height={36}
						content={(props) => renderCustomLegend(props)}
					/>

					<CartesianGrid stroke="#e0e0e0" vertical={false} horizontal={true} />

					<XAxis
						dataKey="day"
						axisLine={false}
						tickLine={false}
						tickMargin={8}
						tick={{ fill: "var(--secondary)", fontSize: 12, fontWeight: 400 }}
					/>

					<YAxis
						axisLine={false}
						tickLine={false}
						tickMargin={0}
						tick={{ fill: "var(--secondary)", fontSize: 12, fontWeight: 500 }}
						ticks={[0, 100, 200, 300, 400, 500]}
						domain={[0, 500]}
						width={30}
					/>

					<Bar
						dataKey="withdraw"
						fill="#232323"
						radius={[30, 30, 30, 30]}
						barSize={isDesktop ? 16 : 7}
					/>

					<Bar
						dataKey="deposit"
						fill="#396AFF"
						radius={[30, 30, 30, 30]}
						barSize={isDesktop ? 16 : 7}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
