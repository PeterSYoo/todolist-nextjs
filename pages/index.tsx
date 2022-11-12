import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Header } from '../components/Header.components';
import { TodoList } from '../components/TodoList.components';

export default function Home() {
  const [session, setSession] = useState();

  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/login');
    } else {
      router.push('/todo-list');
    }
  }, []);
}
