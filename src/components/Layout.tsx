//  📁 src/components/Layout.tsx

import Sidebar from "./Sidebar";

export default function Layout({ children }: any) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ padding: 20, width: "100%" }}>{children}</div>
    </div>
  );
}