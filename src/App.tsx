import { Text, Button, Stack, AppShell} from "@mantine/core";
import { ThemeProvider } from "./ThemeProvider";
import NavBarComponent from "./components/NavBarComponent";

const link = [
  { link: "/", label: "Home" },
  { link: "/Leaderboard", label: "Leaderboard" },
  { link: "/Voting", label: "Voting" },
  { link: "/Tasks", label: "Tasks" },
  { link: "/Profile", label: "Profile" },
];

export default function App() {
  return (
    <ThemeProvider>
      
      <AppShell
        padding="md"
        navbar={
          <NavBarComponent/>
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
