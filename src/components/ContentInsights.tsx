import { motion } from "framer-motion";
import { Heart, MessageCircle, Clock, TrendingUp } from "lucide-react";
import { mockData } from "@/data/mockAnalysis";

const items = [
  { icon: Heart, label: "Avg. Likes", value: mockData.content.avgLikes },
  { icon: MessageCircle, label: "Avg. Comments", value: mockData.content.avgComments },
  { icon: Clock, label: "Posting Frequency", value: mockData.content.postingFrequency },
  { icon: TrendingUp, label: "Best Post", value: mockData.content.bestPost },
];

const ContentInsights = () => (
  <motion.div
    className="analysis-card"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.1 }}
  >
    <h2 className="mb-5 text-lg font-semibold text-foreground">Content Insights</h2>
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.label} className="flex items-start gap-3 rounded-lg bg-secondary/50 p-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent">
            <item.icon className="h-4 w-4 text-accent-foreground" />
          </div>
          <div>
            <p className="stat-label">{item.label}</p>
            <p className="mt-1 text-sm font-medium text-foreground">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

export default ContentInsights;
