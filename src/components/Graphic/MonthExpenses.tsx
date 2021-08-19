import { Box, Heading, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"));

const options = {
  colors: [theme.colors.yellow[400], theme.colors.yellow[500], theme.colors.yellow[600], theme.colors.yellow[700], theme.colors.yellow[800]],
  chart: {
    toolbar: {
      show: false,
    },
    
    animations:{
      enabled: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[200],
  },
  plotOptions: {
    pie: {
      expandOnClick: false
    }
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  labels:['Comida', 'Mercado', 'Roupa', 'Viagem', 'Outros'],
  
};
const series = [422, 122, 344, 1222, 34]
;

export function MonthExpenses() {
  return (
      <Box>
        <Heading
          size="lg"
          fontWeight="normal"
        >
          Chart of the month
          <Chart 
            options={options}
            series={series}
            type="pie"
            height="180px"
          />
        </Heading>
      </Box>
  );
}