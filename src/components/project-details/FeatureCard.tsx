
import { Card, CardContent } from "@/components/ui/card";

interface FeatureProps {
  features: string[];
}

export function FeatureCard({ features }: FeatureProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
