import { HStack, Tag, Text } from "@chakra-ui/react";

interface ExpenseItemProps {
  category: string;
  value: number;
  date: string;
}

export function ExpenseItem({ category, value, date}: ExpenseItemProps) {

  const amount = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  const expenseDate = new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  
  
    

  return (
    <HStack borderBottom="1px" borderColor="gray.300">
      <Text
        fontWeight="bold"
      >
        <Tag 
          size="sm" 
          mr="2" 
          variant="solid"
          bgColor={(category.toUpperCase() === 'ENCARGO') ? 'red.500' : 'gray.600'}
        > {category}</Tag> {amount}
      </Text>
      <Text
        fontSize="sm"
        color="gray.300"
      >
        {expenseDate}
      </Text>
    </HStack>
  );
}