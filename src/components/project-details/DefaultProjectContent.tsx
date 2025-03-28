
import { Project } from "@/lib/types";

interface DefaultProjectContentProps {
  project: Project;
}

export function DefaultProjectContent({ project }: DefaultProjectContentProps) {
  return (
    <>
      <h2>Project Details</h2>
      <p>{project.content}</p>
      
      <h3>Technologies Used</h3>
      <ul>
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
        <li>Additional related technologies would be listed here</li>
      </ul>
      
      <h3>Challenges and Solutions</h3>
      <p>
        This section would describe the challenges faced during the project development
        and the innovative solutions implemented to overcome them.
      </p>
      
      <h3>Results and Impact</h3>
      <p>
        This section would detail the outcomes of the project, including metrics,
        user feedback, and the overall impact achieved.
      </p>
    </>
  );
}
