import { Text } from '@chakra-ui/react';
import { signIn, signOut, useSession } from 'next-auth/client';


export default function SingInButton() {
  const [session] = useSession();

  return session ? (
    <button 
      type="button"
      onClick={() => signOut()}
    >
      <Text>{session.user?.name}</Text>
    </button>
  ) : (
    <button 
      type="button"
      onClick={() => signIn('github')}
    >
      singIn with GitHub
    </button>
  )
}