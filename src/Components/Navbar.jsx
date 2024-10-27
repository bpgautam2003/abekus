'use client'

import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Avatar, Box, Divider } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Image from 'next/image'

export default function Navbar() {
    return (
        <AppBar position="static" sx={{ background: 'linear-gradient(45deg, #25507B, #3572B0)' }}>
            <Toolbar>
                <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                    <Image src="/assets/abekus.png" alt="Crown icon" width={120} height={80} />
                </Box>
                <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <IconButton color="inherit">
                        <Badge
                            badgeContent={1}
                            color="error"
                        >
                            <NotificationsIcon  style={{ color: '#F1CE55' }}/>
                        </Badge>
                    </IconButton>

                    <Divider orientation="vertical" flexItem style={{ backgroundColor: 'white', margin: '0 2px' }} />

                    <IconButton color="inherit" style={{ color: '#F1CE55' }}>
                        <MessageRoundedIcon />
                    </IconButton>

                    <Divider orientation="vertical" flexItem style={{ backgroundColor: 'white', margin: '0 2px' }} />

                    <Avatar />
                </Box>
            </Toolbar>
        </AppBar>
    )
}