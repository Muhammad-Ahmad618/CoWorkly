import { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";

function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
      <Toaster />
    </div>
  );
}

export default layout;
