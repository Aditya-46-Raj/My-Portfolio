
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
    title: 'AI Chatbot using Gemini API',
    slug: 'ai-chatbot-gemini',
    description: 'An AI-powered chatbot built using Tkinter and Google\'s Gemini API, offering multiple conversation modes, markdown-styled note-saving, and PDF export functionality. The chatbot supports various modes including Study Partner, Coding Assistant, Story Generator, and more, with customizable themes and bot presets.',
    shortDescription: 'AI-powered chatbot with multiple modes, markdown notes, and PDF export.',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    tags: ['Artificial Intelligence', 'Python', 'Tkinter', 'Gemini API', 'NLP'],
    githubUrl: 'https://github.com/Aditya-46-Raj/ai-chatbot-gemini',
    demoUrl: '',
    content: `## 🤖 AI Chatbot using Gemini API

An AI-powered chatbot built using Tkinter and Google's Gemini API, offering multiple conversation modes, markdown-styled note-saving, and PDF export functionality.

### 🌟 Features

- **AI-Powered Responses** – Uses Gemini API to generate intelligent responses.
- **Multiple Modes** – Choose from Study Partner, Coding Assistant, Story Generator, and more.
- **Markdown-Styled Notes** – Save responses with bold formatting, maintaining markdown structure.
- **PDF Export** – Save your notes into a cleanly formatted PDF.
- **Customizable Themes** – Switch between Light, Dark, and System themes.
- **Add New Bot Presets** – Define custom bot personalities for different tasks.

### 🚀 Getting Started

#### 1️⃣ Clone the Repository
\`\`\`bash
git clone https://github.com/Aditya-46-Raj/ai-chatbot-gemini.git
cd ai-chatbot-gemini
\`\`\`

#### 2️⃣ Install Dependencies
Make sure you have Python 3.8+ installed, then run:

\`\`\`bash
pip install -r requirements.txt
\`\`\`

This will install the required libraries:
- requests → For API communication
- tkinter → For the GUI
- fpdf → To generate PDF exports

#### 🔑 Adding Your Gemini API Key

To use the chatbot, you need to add your Gemini API Key.

**Steps to Get a Gemini API Key:**
1. Go to Google AI Studio and sign in.
2. Navigate to API Keys in your account settings.
3. Generate a new API key.

**Add the API Key to the Code:**
1. Open main.py in a text editor.
2. Find this line: \`API_KEY = "YOUR_API_KEY_HERE"\`
3. Replace "YOUR_API_KEY_HERE" with your actual API key.

### 🛠 How to Use

1. Run the Application: \`python main.py\`
2. Enter your text, select a bot preset, and hit Send.
3. Save important responses to the Notes Section.
4. Export Notes as a PDF for future reference.

### 📂 Project Structure

\`\`\`
📂 ai-chatbot-gemini/
│-- 📄 main.py  # Main chatbot script
│-- 📄 requirements.txt  # Dependencies
│-- 📂 assets/  # Store UI assets (if any)
│-- 📄 README.md  # Documentation
\`\`\`

### 📌 Future Improvements

- Add Voice Input & Output
- Enhance UI with more customization
- Allow integration with other AI models

### 🤝 Contributing

- Fork the repository
- Create a new branch (feature-xyz)
- Commit changes and submit a pull request

### 📜 License

This project is open-source under the MIT License.`,
    featured: false
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
