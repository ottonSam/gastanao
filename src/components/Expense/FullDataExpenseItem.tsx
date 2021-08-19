import { Box, HStack, Icon, Tag, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { RiInformationLine } from "react-icons/ri";

interface FullDataExpenseItemProps {
  category: string;
  description: string;
  value: number;
  date: string;
}

export function FullDataExpenseItem({ category, description, value, date}: FullDataExpenseItemProps) {

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
    <VStack borderBottom="1px" borderColor="gray.300" align="flex-start">    
      <HStack>
        <Tag 
          size="sm" 
          mr="2" 
          variant="solid"
          bgColor={(category.toUpperCase() === 'ENCARGO') ? 'red.500' : 'gray.600'}
        > 
          {category}
        </Tag> 
        <Text
          fontWeight="bold"
        >
          {amount}
        </Text>
        <Text
          fontSize="sm"
          color="gray.300"
        >
          {expenseDate}
        </Text>
      </HStack>
      <HStack p="2">
        <Text fontSize="sm" color="gray.300">
          {description}
        </Text>
      </HStack>
    </VStack>
  );
}