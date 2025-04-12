    'use client';

import { Container, Typography, Paper, Box, CircularProgress, Alert, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { useGetPostByIdQuery } from '@/store/api/blogApi';

export default function PostDetailContent({ id }: { id: string }) {
  const router = useRouter();
  const postId = parseInt(id);
  const { data: post, isLoading, isError } = useGetPostByIdQuery(postId);

  return (
    <div className="page-transition">
      <Header />
      <Container className="container">
        {isLoading && (
          <Box className="loading-container">
            <CircularProgress />
          </Box>
        )}

        {isError && (
          <Alert severity="error" sx={{ mb: 4 }}>
            Failed to load post. Please try again later.
          </Alert>
        )}

        {post && (
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              By {post.author}
            </Typography>
            <Typography variant="body1" sx={{ mt: 3, whiteSpace: 'pre-line' }}>
              {post.body}
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Button variant="outlined" onClick={() => router.back()}>
                Back to Posts
              </Button>
            </Box>
          </Paper>
        )}
      </Container>
    </div>
  );
}