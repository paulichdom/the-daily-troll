import { FC, ReactNode } from 'react';
import { useRouter } from './RouterContext';

export const Route = ({
  path,
  component: Component,
}: {
  path: string;
  component: FC;
}) => {
  const { currentPath } = useRouter();

  return currentPath === path ? <Component /> : null;
};

export const Router = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};
