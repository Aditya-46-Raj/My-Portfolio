
import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface Step {
  title: string;
  content: ReactNode;
  icon?: number | ReactNode;
  iconBgColor?: string;
  iconTextColor?: string;
}

interface StepsListProps {
  steps: Step[];
  type: "numbered" | "check";
}

export function StepsList({ steps, type }: StepsListProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <ul className="space-y-3">
          {steps.map((step, index) => (
            <li key={index} className="flex items-start">
              {typeof step.icon !== "undefined" ? (
                <span className={`${step.iconBgColor || "bg-blue-100"} ${step.iconTextColor || "text-blue-800"} rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5`}>
                  {step.icon}
                </span>
              ) : (
                <span className={`${type === "numbered" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"} rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5`}>
                  {type === "numbered" ? index + 1 : "✓"}
                </span>
              )}
              <div>
                {step.title && <h3 className="font-medium">{step.title}</h3>}
                {typeof step.content === "string" ? (
                  <p className="text-sm text-gray-600">{step.content}</p>
                ) : (
                  step.content
                )}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
