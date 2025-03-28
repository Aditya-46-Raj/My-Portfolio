
import { Code, FileCode, BarChart3 } from "lucide-react";
import { ContentSection } from "./ContentSection";
import { FeatureCard } from "./FeatureCard";
import { ProjectStructure } from "./ProjectStructure";
import { ModelPerformance } from "./ModelPerformance";
import { TechStack } from "./TechStack";

export function SentimentAnalysisContent() {
  const features = [
    "Preprocessing Pipeline for text data",
    "Multiple Machine Learning Models",
    "Deep Learning Integration",
    "Model Saving & Loading",
    "Performance Evaluation"
  ];
  
  const projectStructure = `📂 movie_review_classifier/
│── 📂 data/                    # Dataset & Processed Data
│   ├── raw/                    # Raw dataset
│   ├── processed/               # Preprocessed & vectorized data
│   ├── X_train.csv              # Training feature data
│   ├── X_test.csv               # Testing feature data
│   ├── Y_train.csv              # Training labels
│   ├── Y_test.csv               # Testing labels
│
│── 📂 models/                   # Saved Trained Models
│   ├── saved_models/            # Pre-trained models
│   ├── linear_svc.pkl           # Linear SVC model
│   ├── random_forest.pkl        # Random Forest model
│   ├── logistic_regression.pkl  # Logistic Regression model
│   ├── Neural_Net.pkl           # Neural Network model
│   ├── tokenizer.pkl            # Tokenizer for text vectorization
│
│── 📂 results/                   # Evaluation Metrics
│   ├── plots/                    # Model Performance Visualizations
│   ├── confusion_matrix_svc.png  
│   ├── confusion_matrix_rf.png  
│   ├── model_accuracy_comparison.png`;

  const modelPerformanceData = [
    { model: "Linear SVC", accuracy: "51.31%", precision: "51.36%" },
    { model: "Random Forest", accuracy: "53.88%", precision: "53.94%" },
    { model: "Neural Network", accuracy: "88.05%", precision: "88.05%", isHighlighted: true },
    { model: "Logistic Regression", accuracy: "51.31%", precision: "51.36%" },
  ];

  const technologies = [
    "Python", "Scikit-Learn", "TensorFlow", "NLP", 
    "Logistic Regression", "Random Forest", "Neural Networks"
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="heading-md mb-4">Key Achievements</h2>
        <ul className="space-y-2 list-disc pl-6">
          <li>Developed a sentiment analysis system to classify movie reviews as positive or negative.</li>
          <li>Implemented multiple models (Linear SVC, Random Forest, Logistic Regression, Neural Network) for comparison.</li>
          <li>Preprocessed text data using NLP techniques and vectorization methods.</li>
          <li>Evaluated models based on accuracy and precision, achieving an accuracy of 88.05% with Neural Networks.</li>
          <li>Saved trained models for future use and streamlined evaluation with visualizations.</li>
        </ul>
      </div>

      <ContentSection title="Features" icon={Code}>
        <FeatureCard features={features} />
      </ContentSection>
      
      <ContentSection title="Project Structure" icon={FileCode}>
        <ProjectStructure structure={projectStructure} />
      </ContentSection>
      
      <ContentSection title="Model Performance" icon={BarChart3}>
        <ModelPerformance 
          data={modelPerformanceData} 
          note="The Neural Network model significantly outperforms other models with 88.05% accuracy." 
        />
      </ContentSection>
      
      <div>
        <h2 className="heading-md mb-4">Tools & Technologies</h2>
        <TechStack technologies={technologies} />
      </div>
      
      <div>
        <h2 className="heading-md mb-4">Future Improvements</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Implement XGBoost or Gradient Boosting for better accuracy</li>
          <li>Add Hyperparameter tuning</li>
          <li>Deploy the model as a web application</li>
        </ul>
      </div>
    </div>
  );
}
