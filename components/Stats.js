import { HStack, Stack, Stat, StatHelpText, StatLabel } from '@chakra-ui/react';

export default function Stats({ firstName, lastName, password }) {
  return (
    <Stat mt={5}>
      <Stack
        p={4}
        borderWidth="3px"
        borderRadius="md"
        direction="column"
        align="flex-start"
      >
        <HStack>
          <StatLabel>Name: {firstName}</StatLabel>
          <StatLabel>{lastName}</StatLabel>
        </HStack>
        <StatHelpText>Password: {password}</StatHelpText>
      </Stack>
    </Stat>
  );
}
