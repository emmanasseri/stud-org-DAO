import React from 'react';
import { IconGitPullRequest, IconAlertCircle, IconMessages, IconDatabase } from '@tabler/icons';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';
import { ChartBar, ListCheck, UserCircle} from "tabler-icons-react";
import { Icon } from 'tabler-icons-react';
import logo from "../images/logo.png";

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  route: string;
}

const link = [
  { link: "/", label: "Home" },
  { link: "/Leaderboard", label: "Leaderboard" },
  { link: "/Voting", label: "Voting" },
  { link: "/Tasks", label: "Tasks" },
  { link: "/Profile", label: "Profile" },
];

function MainLink({ icon, color, label }: MainLinkProps) {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const data = [
  { icon: <ChartBar size={16}/>, color: 'blue', label: 'Leaderboard', route: '../pages/LeaderboardPage' },
  { icon: <ListCheck size={16}/>, color: 'teal', label: 'Tasks', route: '../pages/LeaderboardPage' },
  { icon: <ChartBar size={16}/>, color: 'violet', label: 'Voting', route: '../pages/LeaderboardPage' },
  { icon: <UserCircle size={16}/>, color: 'grape', label: 'Profile', route: '../pages/LeaderboardPage' },
];

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}