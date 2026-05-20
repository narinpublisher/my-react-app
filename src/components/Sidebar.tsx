//  📁 src/components/Sidebar.tsx

import UserMenu from "./UserMenu";

export default function Sidebar() {
  return (
    <div style={{ width: 200, background: "#eee", padding: 10 }}>
      <h3>Sidebar</h3>
      <UserMenu />
    </div>
  );
}