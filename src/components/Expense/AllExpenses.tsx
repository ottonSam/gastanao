import { Box, VStack } from "@chakra-ui/react";
import { FullDataExpenseItem } from "./FullDataExpenseItem";

export function AllExpenses() {
  return (
    <Box>
      <VStack spacing="2" align="left" mt="4"> 
        <FullDataExpenseItem description="Algo por hora broes" category="Comida" value={200} date="03-02-2021"/>
        <FullDataExpenseItem description="Algo por hora broes" category="Comida" value={200} date="03-02-2021"/>
        <FullDataExpenseItem description="Algo por hora broes" category="Encargo" value={200} date="03-02-2021"/>
        <FullDataExpenseItem description="Algo por hora broes" category="Comida" value={200} date="03-02-2021"/>
        <FullDataExpenseItem description="Algo por hora broes" category="Comida" value={200} date="03-02-2021"/>
      </VStack>
    </Box>
  );
}