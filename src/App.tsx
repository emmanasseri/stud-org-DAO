import { Text, Button, Stack, AppShell, Navbar, Header } from "@mantine/core";
import { ThemeProvider } from "./ThemeProvider";
import logo from './images/logo.png';

export default function App() {
  return (
    <ThemeProvider>
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 300 }}  p="xs">
            <Navbar.Section>section 1 with logo</Navbar.Section>
            <Navbar.Section grow mt="md">
              {/* Links sections */}
            </Navbar.Section>
            <Navbar.Section>{/* Footer with user */}</Navbar.Section>
          </Navbar>
        }
        header={
          <Header height={60} p="xs">
            header
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <Stack align="center" mt={50}>
          <Text size="xl" weight={500}>
            Welcome to Mantine!
          </Text>
          <Button>Click the button</Button>
        </Stack>
      </AppShell>
    </ThemeProvider>
  );
}
