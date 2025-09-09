import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';
import Search from '@/app/ui/search';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Customers
      </h1>
      <Search placeholder="Search customers..." />
      <Suspense key={query} fallback={<CustomersTableSkeleton />}>
        <CustomersTableWrapper query={query} />
      </Suspense>
    </div>
  );
}

async function CustomersTableWrapper({ query }: { query: string }) {
  const customers = await fetchFilteredCustomers(query);

  return <CustomersTable customers={customers} />;
}