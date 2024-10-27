"use client"
import Navbar from "@/Components/Navbar";
import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Sidebar from "@/Components/Sidebar";
import { useState, useEffect } from 'react';
import MainContent from "@/Components/MainContent";
import useMediaQuery from '@mui/material/useMediaQuery'
import { ThemeProvider, createTheme } from '@mui/material/styles'
const theme = createTheme()

import {Colleges} from './data';

export default function Home() {
  
const isMd = useMediaQuery(theme.breakpoints.down('md'))
const isSm = useMediaQuery(theme.breakpoints.down('sm'))
const isLg = useMediaQuery(theme.breakpoints.down('lg'))
  const [selectedCollege, setSelectedCollege] = useState(Colleges[0]);
  useEffect(() => {
    const savedCollegeName = localStorage.getItem('selectedCollege');
    if (savedCollegeName) {
      const college = Colleges.find(c => c.name === savedCollegeName);
      if (college) setSelectedCollege(college);
    }
  }, []);
  useEffect(() => {
    if (selectedCollege) {
      localStorage.setItem('selectedCollege', selectedCollege.name);
    }
  }, [selectedCollege]);

  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: "white",  border: "1px solid #f4f4f4" }}>
        <Box sx={{ p: { xs : 1, md : 2}, display: "flex", justifyContent: "space-between", alignItems: "center", color: "#3572B0", borderBottom: "2px solid #25507B" }}>
          <Typography style={{ display: "flex", alignItems: "center" }}>
            <KeyboardArrowLeftIcon />
            Go to Dashboard
          </Typography>
          <Typography variant={isMd ? "subtitle1" : "h6"} style={{ fontWeight: "600" }}>Free Invitations Left: 00</Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Sidebar Colleges={Colleges} onSelectCollege={setSelectedCollege} />
          <MainContent selectedCollege={selectedCollege} />
        </Box>
      </Box>
    </>
  );
}
