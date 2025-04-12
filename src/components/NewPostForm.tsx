'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TextField, Button, Box, Paper, Typography, CircularProgress } from '@mui/material';
import { useCreatePostMutation } from '@/store/api/blogApi';
import { CreateBlogPostRequest } from '@/types/blog';

export default function NewPostForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<CreateBlogPostRequest>({
    title: '',
    author: '',
    body: ''
  });
  const [createPost, { isLoading, isError }] = useCreatePostMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createPost(formData).unwrap();
      router.push('/');
    } catch (error) {
      console.error('Failed to create post:', error);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Create New Post
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Content"
          name="body"
          value={formData.body}
          onChange={handleChange}
          margin="normal"
          multiline
          rows={6}
          required
        />
        {isError && (
          <Box sx={{ color: 'error.main', mt: 2 }}>
            An error occurred while creating the post. Please try again.
          </Box>
        )}
        <Box sx={{ mt: 3 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isLoading}
            sx={{ mr: 2 }}
          >
            {isLoading ? <CircularProgress size={24} /> : 'Create Post'}
          </Button>
          <Button variant="outlined" onClick={() => router.push('/')}>
            Cancel
          </Button>
        </Box>
      </form>
    </Paper>
  );
}