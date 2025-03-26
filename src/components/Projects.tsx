
import { useState } from 'react';
import { useInView } from '@/lib/animations';
import ProjectCard from './ProjectCard';
import { Button } from '@/components/ui/button';
import { Project } from '@/lib/types';

// Sample project data
export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Movie Review Classifier',
    slug: 'sentiment-analysis-tool',
    description: 'A Sentiment Analysis System for Movie Reviews using Machine Learning & Deep Learning techniques. The system analyzes user reviews and classifies them as positive or negative using various models including Linear SVC, Random Forest, Neural Network, and Logistic Regression.',
    shortDescription: 'ML/DL-powered sentiment analysis system for classifying movie reviews as positive or negative.',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    tags: ['Machine Learning', 'Deep Learning', 'NLP', 'Python', 'TensorFlow', 'Scikit-Learn'],
    githubUrl: 'https://github.com/Aditya-46-Raj/movie-review-classifier',
    demoUrl: '',
    content: `## Overview
This project is a Movie Review Classifier that analyzes user reviews and classifies them as positive or negative using Machine Learning and Deep Learning techniques.

### Key Achievements
- Developed a sentiment analysis system to classify movie reviews as positive or negative.
- Implemented multiple models (Linear SVC, Random Forest, Logistic Regression, Neural Network) for comparison.
- Preprocessed text data using NLP techniques and vectorization methods.
- Evaluated models based on accuracy and precision, achieving an accuracy of 88.05% with Neural Networks.
- Saved trained models for future use and streamlined evaluation with visualizations.

### Implemented Models:
- Linear SVC
- Random Forest Classifier
- Neural Network
- Logistic Regression

The dataset is preprocessed, vectorized, and used for training models. The best-performing model is selected based on accuracy and precision.

## Features
- **Preprocessing Pipeline** – Cleans and vectorizes text data.
- **Multiple Machine Learning Models** – Compare different classifiers.
- **Deep Learning Integration** – Neural Network model for better accuracy.
- **Model Saving & Loading** – Store trained models for future use.
- **Performance Evaluation** – Accuracy & precision comparison.

## Project Structure
The project is organized into multiple directories:
- **data/** – Contains raw and processed datasets
  - raw/ – Raw dataset
  - processed/ – Preprocessed & vectorized data
  - X_train.csv – Training feature data
  - X_test.csv – Testing feature data
  - Y_train.csv – Training labels
  - Y_test.csv – Testing labels
- **models/** – Stores saved trained models
  - saved_models/ – Pre-trained models
  - linear_svc.pkl – Linear SVC model
  - random_forest.pkl – Random Forest model
  - logistic_regression.pkl – Logistic Regression model
  - Neural_Net.pkl – Neural Network model
  - tokenizer.pkl – Tokenizer for text vectorization
- **results/** – Contains evaluation metrics and visualizations
  - plots/ – Model Performance Visualizations
  - confusion_matrix_svc.png
  - confusion_matrix_rf.png
  - model_accuracy_comparison.png
- **notebooks/** – Jupyter notebooks for analysis
- **src/** – Source code including data loading, preprocessing, and model training

## Model Performance
| Model | Accuracy | Precision |
|-------|----------|-----------|
| Linear SVC | 51.31% | 51.36% |
| Random Forest | 53.88% | 53.94% |
| Neural Network | 88.05% | 88.05% |
| Logistic Regression | 51.31% | 51.36% |

The Neural Network model significantly outperforms other models with 88.05% accuracy.

## Tools & Technologies
- Python
- Scikit-Learn
- TensorFlow
- NLP
- Logistic Regression
- Random Forest
- Neural Networks

## Future Improvements
- Implement XGBoost or Gradient Boosting for better accuracy
- Add Hyperparameter tuning
- Deploy the model as a web application`,
    featured: true
  },
  {
    id: '2',
    title: 'Image Classification API',
    slug: 'image-classification-api',
    description: 'REST API for image classification using deep learning models.',
    shortDescription: 'Computer vision API for classifying images with high accuracy.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    tags: ['Computer Vision', 'API', 'Deep Learning'],
    githubUrl: 'https://github.com/yourusername/image-classification',
    content: 'Detailed explanation about the image classification project...',
    featured: true
  },
  {
    id: '3',
    title: 'Data Visualization Dashboard',
    slug: 'data-visualization-dashboard',
    description: 'Interactive dashboard for visualizing complex datasets.',
    shortDescription: 'Interactive web-based dashboard for exploring and visualizing complex datasets.',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    tags: ['Data Visualization', 'Web Development', 'D3.js'],
    demoUrl: 'https://data-viz-dashboard.example.com',
    content: 'Detailed explanation about the data visualization project...'
  },
  {
    id: '4',
    title: 'Predictive Maintenance System',
    slug: 'predictive-maintenance-system',
    description: 'ML system that predicts equipment failures before they occur.',
    shortDescription: 'ML-powered system for predicting industrial equipment failures.',
    imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    tags: ['Time Series', 'IoT', 'Industry 4.0'],
    githubUrl: 'https://github.com/yourusername/predictive-maintenance',
    content: 'Detailed explanation about the predictive maintenance project...'
  },
  {
    id: '5',
    title: 'Recommendation Engine',
    slug: 'recommendation-engine',
    description: 'Content-based recommendation system for personalized suggestions.',
    shortDescription: 'Personalized recommendation engine using collaborative filtering.',
    imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    tags: ['Recommendation Systems', 'Python', 'Flask'],
    githubUrl: 'https://github.com/yourusername/recommendation-engine',
    demoUrl: 'https://recommender-demo.example.com',
    content: 'Detailed explanation about the recommendation engine project...'
  },
  {
    id: '6',
    title: 'Natural Language Query System',
    slug: 'natural-language-query-system',
    description: 'System that translates natural language questions into database queries.',
    shortDescription: 'NLP system for converting natural language to database queries.',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    tags: ['NLP', 'SQL', 'Database'],
    githubUrl: 'https://github.com/yourusername/nl-query',
    content: 'Detailed explanation about the natural language query project...'
  }
];

const Projects = () => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);
  
  // Get all unique tags from projects
  const allTags = Array.from(
    new Set(projectsData.flatMap((project) => project.tags))
  );
  
  // Filter projects based on selected tag
  const filteredProjects = selectedTag
    ? projectsData.filter((project) => project.tags.includes(selectedTag))
    : projectsData;
  
  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleProjects.length < filteredProjects.length;
  
  return (
    <section id="projects" className="section-padding px-6 md:px-10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={ref}
          className={`transition-opacity duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="tag bg-gray-100 mb-4">Projects</div>
          <h2 className="heading-lg mb-4">Recent Work</h2>
          <p className="body-md text-gray-600 max-w-2xl mb-12">
            Explore my latest projects showcasing machine learning, Python development, 
            and data engineering skills.
          </p>
          
          {/* Tags filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            <button
              className={`tag transition-colors ${
                selectedTag === null
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedTag(null)}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`tag transition-colors ${
                  selectedTag === tag
                    ? 'bg-gray-800 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          
          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          {/* Load more button */}
          {hasMore && (
            <div className="flex justify-center mt-12">
              <Button
                variant="outline"
                className="rounded-full"
                onClick={() => setVisibleCount((prev) => prev + 3)}
              >
                Load More Projects
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
