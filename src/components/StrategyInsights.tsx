import { motion } from "framer-motion";
import { Lightbulb, Clock, BarChart3, Tag } from "lucide-react";
import { mockData } from "@/data/mockAnalysis";

const StrategyInsights = () => (
  <motion.div
    className="analysis-card"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.3 }}
  >
    <h2 className="mb-5 text-lg font-semibold text-foreground">Content Strategy Insights</h2>
    <div className="space-y-4">
      <div className="rounded-lg bg-secondary/50 p-4">
        <div className="mb-3 flex items-center gap-2">
          <Tag className="h-4 w-4 text-muted-foreground" />
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Main Topics</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {mockData.strategy.mainTopics.map((t) => (
            <span key={t} className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-lg bg-secondary/50 p-4">
        <div className="mb-2 flex items-center gap-2">
          <Lightbulb className="h-4 w-4 text-muted-foreground" />
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Suggested Strategy</p>
        </div>
        <p className="text-sm leading-relaxed text-foreground/80">{mockData.strategy.suggestedStrategy}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg bg-secondary/50 p-4">
          <div className="mb-2 flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Best Posting Time</p>
          </div>
          <p className="text-sm font-medium text-foreground">{mockData.strategy.bestPostingTime}</p>
        </div>
        <div className="rounded-lg bg-secondary/50 p-4">
          <div className="mb-2 flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Engagement Quality</p>
          </div>
          <p className="text-sm font-medium text-foreground">{mockData.strategy.engagementQuality}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

export default StrategyInsights;
