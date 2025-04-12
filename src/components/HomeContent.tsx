'use client';

import { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  CircularProgress, 
  Alert, 
  Pagination,
  Stack
} from '@mui/material';
import PostCard from '@/components/PostCard';
import Header from '@/components/Header';
import { useGetPostsQuery } from '@/store/api/blogApi';

const POSTS_PER_PAGE = 6;

export default function HomeContent() {
  const [page, setPage] = useState(1);
  const { 
    data: paginatedPosts, 
    isLoading, 
    isError 
  } = useGetPostsQuery({ 
    _page: page, 
    _limit: POSTS_PER_PAGE 
  });

  const posts = paginatedPosts?.data || [];
  const totalCount = paginatedPosts?.totalCount || 0;
  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    // Scroll to top when page changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="page-transition">
      <Header />
      <Container className="container">
        <Typography variant="h4" component="h1" className="page-title">
          Blog Posts
        </Typography>

        {isLoading && (
          <Box className="loading-container">
            <CircularProgress />
          </Box>
        )}

        {isError && (
          <Alert severity="error" sx={{ mb: 4 }}>
            Failed to load blog posts. Please try again later.
          </Alert>
        )}

        {posts.length > 0 && (
          <>
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              mx: -2
            }}>
              {posts.map((post) => (
                <Box 
                  key={post.id} 
                  sx={{ 
                    width: {
                      xs: '100%',
                      sm: '50%',
                      md: '33.33%'
                    },
                    px: 2,
                    mb: 4
                  }}
                >
                  <PostCard post={post} />
                </Box>
              ))}
            </Box>

            {/* Pagination control */}
            <Stack spacing={2} sx={{ mt: 4, mb: 6, display: 'flex', alignItems: 'center' }}>
              <Pagination 
                count={totalPages} 
                page={page} 
                color="primary" 
                onChange={handlePageChange}
                size="large"
                showFirstButton
                showLastButton
              />
              <Typography variant="body2" color="text.secondary">
                Showing page {page} of {totalPages} ({totalCount} total posts)
              </Typography>
            </Stack>
          </>
        )}

        {!isLoading && posts.length === 0 && (
          <Alert severity="info" sx={{ mt: 4 }}>
            No posts found.
          </Alert>
        )}
      </Container>
    </div>
  );
}