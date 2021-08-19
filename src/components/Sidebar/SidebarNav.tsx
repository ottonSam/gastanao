import { Stack } from "@chakra-ui/react";
import { RiGitMergeLine, RiLineChartLine, RiRefund2Line, RiTableLine } from "react-icons/ri";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack
      spacing="12"
      align="flex-start"
    >
      <NavSection title="GENERAL">
        <NavLink icon={RiLineChartLine} href="/graphic">Graphics</NavLink>
        <NavLink icon={RiRefund2Line} href="/expense">Expense</NavLink>
      </NavSection>
      
      <NavSection title="IMPORT" >
        <NavLink icon={RiTableLine} href="/forms">Base table</NavLink>
        <NavLink icon={RiGitMergeLine} href="/automation">Import tool</NavLink>        
      </NavSection>
    </Stack>
  );
}