import * as React from 'react';
import { AppBar, Toolbar, IconButton, Box, InputBase, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

export default function NavBar({ children }) {
    const childrenArray = React.Children.toArray(children);
    const homeLink = childrenArray[0];
    const pageLinks = childrenArray.slice(1);
    return (
        <AppBar position="static" sx={{ background: 'linear-gradient(90deg, #23232b 0%, #3a2547 100%)' }}>
            <Toolbar sx={{ gap: 2 }}>
                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Box sx={{ mr: 2, fontWeight: 'bold', fontSize: '1.25rem', letterSpacing: 1 }}>
                    {React.isValidElement(homeLink)
                        ? React.cloneElement(homeLink, { style: { ...(homeLink.props.style || {}), fontWeight: 'bold', fontSize: '1.15rem', whiteSpace: 'nowrap' } })
                        : homeLink}
                </Box>
                <Paper
                    component="form"
                    sx={{ p: '2px 6px', display: 'flex', alignItems: 'center', width: 180, background: 'rgba(255,255,255,0.08)', boxShadow: 'none', borderRadius: 2, mr: 2 }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1, color: 'inherit', fontSize: '0.95rem' }}
                        placeholder="Buscar..."
                        inputProps={{ 'aria-label': 'buscar' }}
                    />
                    <IconButton type="submit" sx={{ p: '6px', color: 'inherit' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center', gap: 1, minWidth: 0 }}>
                    {pageLinks.map((child, idx) =>
                        React.isValidElement(child)
                            ? React.cloneElement(child, {
                                style: {
                                    ...(child.props.style || {}), fontSize: '0.95rem', whiteSpace: 'nowrap', overflow: 'hidden',
                                    textOverflow: 'ellipsis', minWidth: 0
                                }
                            })
                            : child
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
}