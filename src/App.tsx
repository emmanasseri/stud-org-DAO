import { Text, Button, Stack, AppShell, Navbar, Header } from "@mantine/core";
import { ThemeProvider } from "./ThemeProvider";
import { Brand } from "./components/Brand";
import { MainLinks } from "./components/MainLinks";
import logo from "./images/logo.png";
import React from "react";

export default function App() {
  return (
    <ThemeProvider>
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 300 }} p="xs">
            <Navbar.Section>
              <Brand />
            </Navbar.Section>
            <Navbar.Section grow mt="md">
              <MainLinks />
            </Navbar.Section>
            <Navbar.Section>{/* Footer with user */}</Navbar.Section>
          </Navbar>
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
            DAO site!
          </Text>
          <Button>Participate</Button>
        </Stack>
      </AppShell>
    </ThemeProvider>
  );
}
