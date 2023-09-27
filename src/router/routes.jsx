import MainLayout from "../layout/main";

export const appRoutes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: '<Home />',
            },
            {
                path: '/about',
                element: "<About />",
            },
            {
                path: '/register',
                element: "<Register />",
            },
            {
                path: '*',
                element: <h1>Not Found</h1>,
            }
        ]
    },

]
