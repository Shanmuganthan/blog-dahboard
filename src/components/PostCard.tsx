'use client';

import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import { BlogPost } from '@/types/blog';
import Link from 'next/link';

interface PostCardProps {
  post: BlogPost;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {post.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          By {post.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.excerpt}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} href={`/posts/${post.id}`}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}