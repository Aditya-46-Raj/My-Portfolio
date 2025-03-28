
interface TechStackProps {
  technologies: string[];
}

export function TechStack({ technologies }: TechStackProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <span key={index} className="badge bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
          {tech}
        </span>
      ))}
    </div>
  );
}
