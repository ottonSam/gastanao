import { Box, Heading, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"));

const options = {
  colors: [theme.colors.yellow[400]],
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[200],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime' as 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-01',
      '2021-02',
      '2021-03',
      '2021-04',
      '2021-05',
      '2021-06',
      '2021-07',
      '2021-08',
      '2021-09',
      '2021-10',
      '2021-11',
      '2021-12',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }
};
const series = [
  {name : 'series1', data: [3110, 1204, 1206, 2238, 802, 1280, 1119, 1110, 1203, 1238, 1323, 1]}
];

export function YearExpenses() {
  return (
      <Box
        mb="6"
      >
        <Heading
          size="lg"
          fontWeight="normal"
        >
          Expense for year
          <Chart 
            options={options}
            series={series}
            type="area"
            height={160}
          />
        </Heading>
      </Box>
  );
}