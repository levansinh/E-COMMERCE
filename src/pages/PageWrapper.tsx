import { type ReactNode, Suspense } from 'react';

import CenterLoadingLayout from '@/layouts/CenterLoadingLayout/CenterLoadingLayout';
// import { withErrorBoundary } from 'react-error-boundary';

interface PageWrapperProps {
  children: ReactNode;
}

function PageWrapper({ children }: PageWrapperProps) {
  return <Suspense fallback={<CenterLoadingLayout />}>{children}</Suspense>;
}
export default PageWrapper;
