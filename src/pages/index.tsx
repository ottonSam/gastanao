import { useSession } from 'next-auth/client';
import GraphicPage from './graphic';
import { SingIn } from '../components/SingIn';


export default function SingInButton() {
  const [session] = useSession();

  return session ? (
    <GraphicPage />
  ) : (
    <SingIn />
  )
}