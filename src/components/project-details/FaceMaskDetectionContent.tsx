
import { FileCode, ListChecks, Camera, Database, Award } from "lucide-react";
import { ContentSection } from "./ContentSection";
import { FeatureCard } from "./FeatureCard";
import { ProjectStructure } from "./ProjectStructure";
import { TechStack } from "./TechStack";
import { StepsList } from "./StepsList";

export function FaceMaskDetectionContent() {
  const features = [
    "Custom Deep CNN Model",
    "Data Augmentation",
    "Model Evaluation",
    "Optimizations (Batch Norm, Dropout)",
    "Real-Time Detection Ready"
  ];

  const projectStructure = `📂 face_mask_detection/
│-- dataset/           # Dataset for training & testing
│-- models/            # Saved models
│-- notebooks/         # Jupyter notebooks for training & evaluation
│-- scripts/           # Python scripts for inference & testing
│-- README.md          # Project documentation`;

  const modelImprovements = [
    {
      title: "Increased Model Depth",
      content: "More layers for better feature extraction"
    },
    {
      title: "Batch Normalization",
      content: "Stabilizes and speeds up training"
    },
    {
      title: "Dropout Regularization",
      content: "Reduces overfitting"
    },
    {
      title: "Advanced Data Augmentation",
      content: "Makes model robust to variations"
    },
    {
      title: "Learning Rate Scheduling",
      content: "Dynamically adjusts learning rate"
    }
  ];

  const modelTrainingSteps = [
    {
      title: "Training",
      content: "The improved CNN model is trained with augmented images"
    },
    {
      title: "Accuracy/Loss Graphs",
      content: "Visualize training progress"
    },
    {
      title: "Precision, Recall, F1-Score",
      content: "Evaluate model performance"
    }
  ];

  const technologies = [
    "Python", "TensorFlow", "Keras", "OpenCV", "NumPy", 
    "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn"
  ];

  return (
    <div className="space-y-8">
      <ContentSection title="Key Features">
        <FeatureCard features={features} />
      </ContentSection>

      <ContentSection title="Project Structure" icon={FileCode}>
        <ProjectStructure structure={projectStructure} />
      </ContentSection>
      
      <ContentSection title="Model Improvements" icon={ListChecks}>
        <StepsList steps={modelImprovements} type="numbered" />
      </ContentSection>
      
      <ContentSection title="Model Training & Evaluation" icon={Camera}>
        <StepsList steps={modelTrainingSteps} type="check" />
      </ContentSection>
      
      <ContentSection title="Technologies Used" icon={Database}>
        <TechStack technologies={technologies} />
      </ContentSection>
      
      <ContentSection title="Project Status" icon={Award}>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
          <div className="bg-green-500 rounded-full w-3 h-3 mr-2"></div>
          <p className="text-green-800">Model is trained and predicting correctly!</p>
        </div>
      </ContentSection>
      
      <div>
        <h2 className="heading-md mb-4">Next Steps</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Deploy the model for real-time detection</li>
          <li>Further optimize hyperparameters for better accuracy</li>
        </ul>
      </div>
    </div>
  );
}
