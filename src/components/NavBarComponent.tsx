import {Navbar} from "@mantine/core";
import { Brand } from "./Brand";
import { MainLinks } from "./MainLinks";
import { Routes, Route, Link} from "react-router-dom";
import LeaderboardPage from "../pages/LandingPage"
import VotingPage from "../pages/VotingPage";
import TasksPage from "../pages/TasksPage";
import ProfilePage from "../pages/ProfilePage";
import LandingPage from "../pages/LandingPage";
import React from "react";


const link = [
  { link: "/", label: "Home" },
  { link: "/Leaderboard", label: "Leaderboard" },
  { link: "/Voting", label: "Voting" },
  { link: "/Tasks", label: "Tasks" },
  { link: "/Profile", label: "Profile" },
];

export default function NavBarComponent(){
    return(
        <>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/voting" element={<VotingPage />} />
          <Route path="/tasks" element={<TasksPage />} />
        </Routes>
        <Navbar width={{ base: 300 }} p="xs">
            <Navbar.Section>
              <Brand />
            </Navbar.Section>
            <Navbar.Section grow mt="md">
              <MainLinks />
            </Navbar.Section>
            <Navbar.Section>{/* Footer with user */}</Navbar.Section>
          </Navbar>
          </>
    );
}

