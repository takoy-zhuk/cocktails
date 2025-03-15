import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider as ReactRouterProvider,
} from 'react-router-dom';

import { COCKTAIL_CODE } from '@widgets/cocktails-list/api/types.ts';
import Layout from '@shared/layouts/Layout.tsx';
import NotFound from '@widgets/not-found/ui/NotFound.tsx';
import { CocktailsPage } from '@pages/cocktails';
import { NavBar } from '@widgets/navigation';
import { Suspense } from 'react';
import { Loader } from '@shared/ui';

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loader />}>
        <Layout navbar={<NavBar />} outlet={<Outlet />} />
      </Suspense>
    ),
    children: [
      {
        path: '',
        element: <Navigate to={`${COCKTAIL_CODE.margarita}`} />,
      },
      {
        path: `${COCKTAIL_CODE.margarita}`,
        element: <CocktailsPage cocktailCode={COCKTAIL_CODE.margarita} />,
      },
      {
        path: `${COCKTAIL_CODE.mojito}`,
        element: <CocktailsPage cocktailCode={COCKTAIL_CODE.mojito} />,
      },
      {
        path: `${COCKTAIL_CODE.a1}`,
        element: <CocktailsPage cocktailCode={COCKTAIL_CODE.a1} />,
      },
      {
        path: `${COCKTAIL_CODE.kir}`,
        element: <CocktailsPage cocktailCode={COCKTAIL_CODE.kir} />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const RouterProvider = () => {
  return <ReactRouterProvider router={router} />;
};

export default RouterProvider;
