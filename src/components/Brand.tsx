import React from 'react';
import { Group, ActionIcon, useMantineColorScheme, Box } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
import logo from "../images/logo.png";

export function Brand() {
  //const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Box
      sx={(theme) => ({
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        paddingBottom: theme.spacing.lg,
        borderBottom: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
        }`,
      })}
    >
      <Group position="apart">
      <img src={logo} alt="" width ="50" height = "50" />
        <ActionIcon variant="default" size={30}>
          DAO site
        </ActionIcon>
      </Group>
    </Box>
  );
}