import React from "react";

interface LayoutComponentProps {
  leftWidth?: number;
  // children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
  children: JSX.Element[];
}

function LayoutComponent({ leftWidth, children }: LayoutComponentProps) {
  const [Sidebar, Content] = children;

  return (
    <div className='flex'>
      <div className='flex-1'>{Sidebar}</div>
      <div className='flex-1'>{Content}</div>
    </div>
  );
}

export default LayoutComponent;
