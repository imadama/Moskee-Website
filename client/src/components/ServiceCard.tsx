import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="bg-white shadow-lg">
      <CardHeader className="flex items-center justify-center pt-8">
        <Icon className="h-12 w-12 text-primary" />
      </CardHeader>
      <CardContent className="text-center">
        <h3 className="text-xl font-serif mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}
