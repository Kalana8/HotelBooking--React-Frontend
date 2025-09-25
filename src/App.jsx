// App shell: defines client-side routing and shared layout (Header/Footer)
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { Footer, Header, PageNotFound } from './components';
import { Home, RoomDetails, About, Services, Contact } from './pages';


const App = () => {

  // const paths = [
  //   { path: '/', element: <Home /> },
  //   { path: '/room/:id', element: <RoomDetails /> },
  //   { path: '*', element: <PageNotFound /> },
  // ]

  // const router = createBrowserRouter(paths);
  // <RouterProvider router={router} /> 

  return (

    // Main layout for the app: Router wraps shared Header/Footer and page routes
    <main className=''>
      <BrowserRouter>

        {/* Always visible navigation bar */}
        <Header />

        {/* Route table: map URLs to page components */}
        <Routes>
          {/* Homepage */}
          <Route path={'/'} element={<Home />} />
          {/* Static pages */}
          <Route path={'/about'} element={<About />} />
          <Route path={'/services'} element={<Services />} />
          <Route path={'/contact'} element={<Contact />} />
          {/* Dynamic room details by id */}
          <Route path={'/room/:id'} element={<RoomDetails />} />
          {/* Fallback 404 */}
          <Route path={'*'} element={<PageNotFound />} />
        </Routes>

        {/* Global footer */}
        <Footer />

      </BrowserRouter>
    </main>
  )
}

export default App