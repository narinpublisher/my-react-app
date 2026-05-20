//  📁 src/components/UserMenu.tsx

import { useAuthStore } from "../stores/authStore";

export default function UserMenu() {
  const { user, logout } = useAuthStore();

  return (
    <div>
      <p>User: {user?.name}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}