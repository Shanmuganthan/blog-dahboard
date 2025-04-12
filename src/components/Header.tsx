'use client';

import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Blog Dashboard
        </Typography>
        <Box>
          <Button 
            color="inherit" 
            component={Link} 
            href="/"
            sx={{ 
              fontWeight: pathname === '/' ? 'bold' : 'normal',
              textDecoration: pathname === '/' ? 'underline' : 'none'
            }}
          >
            Posts
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            href="/new"
            sx={{ 
              fontWeight: pathname === '/new' ? 'bold' : 'normal',
              textDecoration: pathname === '/new' ? 'underline' : 'none'
            }}
          >
            New Post
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
