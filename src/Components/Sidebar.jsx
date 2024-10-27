
import React, { useState, useEffect } from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PersonIcon from '@mui/icons-material/Person'
import MenuIcon from '@mui/icons-material/Menu'
import Image from 'next/image'
import useMediaQuery from '@mui/material/useMediaQuery'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const theme = createTheme()

export default function Sidebar({ Colleges, onSelectCollege }) {
    const [activeCollege, setActiveCollege] = useState(Colleges[0])
    const [isOpen, setIsOpen] = useState(false)
    const isMdOrLess = useMediaQuery(theme.breakpoints.down('lg'))

    useEffect(() => {
        const savedCollege = localStorage.getItem('activeCollege')
        if (savedCollege) {
            const college = Colleges.find(c => c.name === savedCollege)
            if (college) setActiveCollege(college)
        }
    }, [Colleges])

    useEffect(() => {
        if (activeCollege) {
            localStorage.setItem('activeCollege', activeCollege.name)
        }
    }, [activeCollege])

    const handleToggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    const handleSelectCollege = (college) => {
        setActiveCollege(college)
        onSelectCollege(college)
    }

    return (
        <ThemeProvider theme={theme}>
            <Box style={{ height: "100vh", borderRight: "1px solid #7B7B7B40", position: { sm: "fixed", lg: "relative" }}}>
                {isMdOrLess && !isOpen && (
                    <IconButton onClick={handleToggleSidebar}  style={{ color : "#ffffff", position : "fixed", top : "1rem"}}>
                        <MenuIcon  size={40}/>
                    </IconButton>
                )}

                {(!isMdOrLess || isOpen) && (
                    <Box sx={{ width: 340, pt : 2 }}>
                        <Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between", pr: 2 }}>
                                <Typography style={{ color: "black", paddingLeft: "1rem", margin: "10px 0" }}>
                                    AI Recommended Colleges
                                </Typography>
                                {isMdOrLess && isOpen && (
                                    <IconButton onClick={handleToggleSidebar}>
                                        <ArrowBackIosNewIcon />
                                    </IconButton>
                                )}
                            </Box>

                            <Box>
                                {Colleges.map((college, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: 'flex',
                                            padding: 1.5,
                                            marginBottom: "5px",
                                            backgroundColor: activeCollege === college ? '#3572B01A' : 'transparent',
                                            '&:hover': {
                                                cursor: 'pointer',
                                            },
                                        }}
                                        onClick={() => handleSelectCollege(college)}
                                    >
                                        <Box sx={{ marginRight: 2 }}>
                                            <Image
                                                src={college.logo}
                                                alt={`${college.name} logo`}
                                                width={60}
                                                height={40}
                                            />
                                        </Box>

                                        <Box>
                                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                <Typography variant="h6" style={{ color: "#25507B" }}>
                                                    {college.name}
                                                </Typography>
                                                {college.invited ? (
                                                    <Typography variant="subtitle2" style={{ color: "#25507B", border: "1px solid #25507B", padding: "2.5px 10px", borderRadius: "25px" }}>Invited</Typography>
                                                ) : (
                                                    <Image
                                                        src={'/assets/crown.png'}
                                                        alt={`crown`}
                                                        width={30}
                                                        height={20}
                                                    />
                                                )}
                                            </Box>

                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    color: '#7B7B7B'
                                                }}
                                            >
                                                <LocationOnIcon fontSize="small" sx={{ marginRight: 0.5, color: "#25507B" }} />
                                                {college.location}
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    color: '#7B7B7B'
                                                }}
                                            >
                                                <PersonIcon fontSize="small" sx={{ marginRight: 0.5, color: "#25507B" }} />
                                                {college.students} Students
                                            </Box>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                )}
            </Box>
        </ThemeProvider>
    )
}
