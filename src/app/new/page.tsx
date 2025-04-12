import ClientProviders from '@/components/ClientProviders';
import NewPostContent from '@/components/NewPostContent';

export default function NewPostPage() {
  return (
    <ClientProviders>
      <NewPostContent />
    </ClientProviders>
  );
}