import ClientProviders from '@/components/ClientProviders';
import PostDetailContent from '@/components/PostDetailContent';

export default function PostDetailPage({ params }: { params: { id: string } }) {
  return (
    <ClientProviders>
      <PostDetailContent id={params.id} />
    </ClientProviders>
  );
}