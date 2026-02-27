"use client";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen bg-[#f8f3f1] flex items-center justify-center">
      {children}
    </div>
  );
}
