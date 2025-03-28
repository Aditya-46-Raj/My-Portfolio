
import { Card, CardContent } from "@/components/ui/card";

interface ProjectStructureProps {
  structure: string;
}

export function ProjectStructure({ structure }: ProjectStructureProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="pt-6">
        <div className="text-sm text-gray-700 font-mono bg-gray-50 p-4 rounded-lg overflow-x-auto">
          <pre className="text-left whitespace-pre-line">
            {structure}
          </pre>
        </div>
      </CardContent>
    </Card>
  );
}
