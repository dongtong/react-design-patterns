import React from "react";

interface SidebarProps {
  width?: number;
}

function Sidebar({ width }: SidebarProps) {
  console.log("width-------------", width);
  return (
    <div className='bg-slate-300 min-h-screen' style={{ width: width ?? 260 }}>
      Sidebar
    </div>
  );
}

export default Sidebar;
