
import { MessageSquare, FileCode, Zap, FileText, Cpu } from "lucide-react";
import { ContentSection } from "./ContentSection";
import { FeatureCard } from "./FeatureCard";
import { ProjectStructure } from "./ProjectStructure";
import { TechStack } from "./TechStack";
import { Card, CardContent } from "@/components/ui/card";
import { StepsList } from "./StepsList";

export function AIChatbotContent() {
  const features = [
    "AI-Powered Responses via Gemini API",
    "Multiple Conversation Modes",
    "Markdown-Styled Note Saving",
    "PDF Export Functionality",
    "Customizable Themes",
    "Custom Bot Presets"
  ];

  const projectStructure = `📂 ai-chatbot-gemini/
│-- 📄 main.py               # Main chatbot script
│-- 📄 requirements.txt      # Dependencies
│-- 📂 assets/               # Store UI assets (if any)
│-- 📄 README.md             # Documentation`;

  const technologies = ["Python", "Tkinter", "Gemini API", "Requests", "FPDF"];

  const gettingStartedSteps = [
    {
      title: "Clone the Repository",
      content: (
        <div className="bg-gray-100 p-3 rounded mt-2 text-sm font-mono overflow-x-auto">
          git clone https://github.com/Aditya-46-Raj/ai-chatbot-gemini.git
        </div>
      )
    },
    {
      title: "Install Dependencies",
      content: (
        <>
          <div className="bg-gray-100 p-3 rounded mt-2 text-sm font-mono overflow-x-auto">
            pip install -r requirements.txt
          </div>
          <p className="text-sm text-gray-600 mt-2">
            This installs: requests, tkinter, fpdf
          </p>
        </>
      )
    },
    {
      title: "Add Your Gemini API Key",
      content: "Get an API key from Google AI Studio and add it to main.py"
    },
    {
      title: "Run the Application",
      content: (
        <div className="bg-gray-100 p-3 rounded mt-2 text-sm font-mono overflow-x-auto">
          python main.py
        </div>
      )
    }
  ];

  return (
    <div className="space-y-8">
      <ContentSection title="Key Features">
        <FeatureCard features={features} />
      </ContentSection>

      <ContentSection title="Conversation Modes" icon={MessageSquare}>
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg bg-gray-50">
                <h3 className="font-medium mb-2">Study Partner</h3>
                <p className="text-sm text-gray-600">AI assistant for academic studies and learning assistance</p>
              </div>
              <div className="p-4 border rounded-lg bg-gray-50">
                <h3 className="font-medium mb-2">Coding Assistant</h3>
                <p className="text-sm text-gray-600">Help with programming, debugging, and technical problems</p>
              </div>
              <div className="p-4 border rounded-lg bg-gray-50">
                <h3 className="font-medium mb-2">Story Generator</h3>
                <p className="text-sm text-gray-600">Creates creative narratives and stories from prompts</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </ContentSection>
      
      <ContentSection title="Project Structure" icon={FileCode}>
        <ProjectStructure structure={projectStructure} />
      </ContentSection>
      
      <ContentSection title="Getting Started" icon={Zap}>
        <StepsList steps={gettingStartedSteps} type="numbered" />
      </ContentSection>
      
      <ContentSection title="Using the Chatbot" icon={FileText}>
        <Card>
          <CardContent className="pt-6">
            <ol className="space-y-2 list-decimal pl-6">
              <li>Enter your text in the input field</li>
              <li>Select a bot preset from the dropdown menu</li>
              <li>Click Send to generate a response</li>
              <li>Save important responses to the Notes Section</li>
              <li>Export Notes as a PDF for future reference</li>
            </ol>
          </CardContent>
        </Card>
      </ContentSection>
      
      <ContentSection title="Technologies Used" icon={Cpu}>
        <TechStack technologies={technologies} />
      </ContentSection>
      
      <div>
        <h2 className="heading-md mb-4">Future Improvements</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Add Voice Input & Output</li>
          <li>Enhance UI with more customization</li>
          <li>Allow integration with other AI models</li>
        </ul>
      </div>
    </div>
  );
}
