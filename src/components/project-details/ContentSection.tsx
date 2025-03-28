
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface ContentSectionProps {
  title: string;
  icon?: LucideIcon;
  children: ReactNode;
}

export function ContentSection({ title, icon: Icon, children }: ContentSectionProps) {
  return (
    <div>
      <h2 className="heading-md mb-4 flex items-center">
        {Icon && <Icon className="mr-2 h-5 w-5" />}
        {title}
      </h2>
      {children}
    </div>
  );
}
