
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

interface PerformanceRow {
  model: string;
  accuracy: string;
  precision: string;
  isHighlighted?: boolean;
}

interface ModelPerformanceProps {
  data: PerformanceRow[];
  note?: string;
}

export function ModelPerformance({ data, note }: ModelPerformanceProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="pt-6">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Model</TableHead>
                <TableHead>Accuracy</TableHead>
                <TableHead>Precision</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index} className={row.isHighlighted ? "bg-green-50" : ""}>
                  <TableCell className={row.isHighlighted ? "font-medium" : ""}>{row.model}</TableCell>
                  <TableCell className={row.isHighlighted ? "font-medium" : ""}>{row.accuracy}</TableCell>
                  <TableCell className={row.isHighlighted ? "font-medium" : ""}>{row.precision}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {note && <p className="text-sm text-gray-500 mt-4">{note}</p>}
      </CardContent>
    </Card>
  );
}
