import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Graph from './Graph'
import PieChart from './PieChart'
import { skillsData } from '@/app/data'

import useMediaQuery from '@mui/material/useMediaQuery'
import { ThemeProvider, createTheme } from '@mui/material/styles'
const theme = createTheme()

const MainContent = ({ selectedCollege }) => {

    const isMd = useMediaQuery(theme.breakpoints.down('md'))

    const isSm = useMediaQuery(theme.breakpoints.down('sm'))
    const isLg = useMediaQuery(theme.breakpoints.down('lg'))
    return (
        <Box sx={{ p: { xs: 2, md: 4 }, width: "100%", height: "100vh", overflowY: "auto" }}>
            <Box sx={{ display: { sm: "flex" }, justifyContent: "space-between" }}>
                <Box sx={{ display: "flex" }}>
                    <Box sx={{ marginRight: { xs: 1, md: 2 } }}>
                        <Image
                            src={selectedCollege.logo}
                            alt={`${selectedCollege.name} logo`}
                            width={60}
                            height={80}
                        />
                    </Box>
                    <Box>
                        <Typography variant={isMd ? "h6" : "h5"} style={{ color: "#25507B" }}>
                            {selectedCollege.name}
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                color: '#7B7B7B',
                                margin: "10px 0"
                            }}
                        >
                            <LocationOnIcon sx={{ marginRight: 0.5, color: "#25507B" }} />
                            <Typography variant={isSm ? "subtitle2" : "subtitle1"}>{selectedCollege.location}</Typography>
                        </Box>
                        {selectedCollege.invited && !isSm ? (
                            <Button style={{ width: 180, backgroundColor: "#3572B01A", color: "#25507B", textTransform: 'none' }}>Invited</Button>
                        ) : (
                            <></>
                        )}
                    </Box>
                </Box>
                <Box sx={{ borderLeft: { sm: "3px solid #25507B40" }, textAlign: { sm: "right" }, paddingLeft: "1rem" }}>
                    <Box sx={{display : "flex", flexDirection : {xs : "row", sm : "column"}, alignItems : {xs : "center", sm : "end"}, gap : {xs : 2, sm : 0}}}>
                        <Typography variant="subtitle1" color="#7B7B7B">College Strength on Abekus</Typography>
                        <Typography variant="h6" color="#25507B">{selectedCollege.strength_on_abekus}</Typography>
                    </Box>
                    <Box sx={{display : "flex", flexDirection : {xs : "row", sm : "column"}, alignItems : {xs : "center", sm : "end"}, gap : {xs : 2, sm : 0}}}>
                        <Typography variant="subtitle1" color="#7B7B7B">Students hired on Abekus</Typography>
                        <Typography variant="h6" color="#25507B">{selectedCollege.students_hired}</Typography>
                    </Box>


                </Box>
            </Box>
            <Box sx={{ my: {xs : 2, md : 4} }}>
                <Typography variant={isSm ? "subtitle1" : "h6"} color="#25507B" sx={{ mb: 2 }}>College Performance & Projection (Year 2022-23)</Typography>
                <Graph selectedCollege={selectedCollege} />
            </Box>
            <Box>

                <Typography variant={isSm ? "subtitle1" : "h6"} color="#25507B" sx={{ mb: 2 }}>Student’s Performance Matching Your Job Skills</Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent : "center" }}>
                    {skillsData.map((skill, index) => (
                        <Box key={index}>
                            <PieChart skill={skill} />
                        </Box>
                    ))}
                </Box>

            </Box>


        </Box>
    )
}

export default MainContent

