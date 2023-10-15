import { getUsers } from '@/services';
import Link from 'next/link';

export default async function UsersPage() {
  const users = await getUsers();
  return (
    <ul className="menu menu-vertical rounded-box">
      {users.map((user) => (
        <li key={user.id}>
          <Link
            className="block py-5 text-lg"
            href={`/dashboard/users/${user.id}`}
          >
            {user.email}
          </Link>
        </li>
      ))}
    </ul>
  );
}
