import { motion } from "framer-motion";
import { Video, Image, Hash, FileText } from "lucide-react";
import { mockData } from "@/data/mockAnalysis";

const MediaAnalysis = () => (
  <motion.div
    className="analysis-card"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.2 }}
  >
    <h2 className="mb-5 text-lg font-semibold text-foreground">AI Media Analysis</h2>
    <div className="space-y-4">
      {[
        { icon: Video, title: "Video Transcription Summary", text: mockData.media.videoSummary },
        { icon: Image, title: "Image Description", text: mockData.media.imageDescription },
        { icon: FileText, title: "Extracted Text (OCR)", text: mockData.media.extractedText },
      ].map((item) => (
        <div key={item.title} className="rounded-lg bg-secondary/50 p-4">
          <div className="mb-2 flex items-center gap-2">
            <item.icon className="h-4 w-4 text-muted-foreground" />
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{item.title}</p>
          </div>
          <p className="text-sm leading-relaxed text-foreground/80">{item.text}</p>
        </div>
      ))}
      <div className="rounded-lg bg-secondary/50 p-4">
        <div className="mb-3 flex items-center gap-2">
          <Hash className="h-4 w-4 text-muted-foreground" />
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Detected Topics</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {mockData.media.detectedTopics.map((topic) => (
            <span key={topic} className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export default MediaAnalysis;
