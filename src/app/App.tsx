import { RouterProvider } from 'react-router';
import { router } from './routes';
import { ContactBubble } from './components/ContactBubble';

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ContactBubble />
    </>
  );
}
