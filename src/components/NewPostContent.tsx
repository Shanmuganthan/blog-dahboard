'use client';

import { Container } from '@mui/material';
import Header from '@/components/Header';
import NewPostForm from '@/components/NewPostForm';

export default function NewPostContent() {
  return (
    <div className="page-transition">
      <Header />
      <Container className="container">
        <NewPostForm />
      </Container>
    </div>
  );
}