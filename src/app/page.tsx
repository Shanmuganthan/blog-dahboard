import ClientProviders from '@/components/ClientProviders';
import HomeContent  from '@/components/HomeContent';

export default function Home() {
  return (
    <ClientProviders>
      <HomeContent   />
    </ClientProviders>
  );
}