import { useState, useCallback } from "react";
import { Search } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingSpinner from "@/components/LoadingSpinner";
import ProfileOverview from "@/components/ProfileOverview";
import ContentInsights from "@/components/ContentInsights";
import MediaAnalysis from "@/components/MediaAnalysis";
import StrategyInsights from "@/components/StrategyInsights";

const Index = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnalyze = useCallback(() => {
    if (!url.trim()) return;
    setShowResults(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowResults(true);
    }, 2400);
  }, [url]);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-[900px] px-5 py-16 sm:py-24">
        {/* Header */}
        <header className="mb-14 text-center">
          <h1 className="gradient-text text-4xl font-bold tracking-tight sm:text-5xl">
            InstaInsight
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            Deep analysis of Instagram profiles using AI
          </p>
        </header>

        {/* Input */}
        <div className="mx-auto mb-10 max-w-xl">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAnalyze()}
                placeholder="Paste an Instagram profile URL (e.g. https://instagram.com/username)"
                className="input-field pl-10"
              />
            </div>
            <button
              onClick={handleAnalyze}
              disabled={loading || !url.trim()}
              className="btn-primary shrink-0"
            >
              {loading ? "Analyzing..." : "Analyze Profile"}
            </button>
          </div>
        </div>

        {/* Loading */}
        <AnimatePresence>{loading && <LoadingSpinner />}</AnimatePresence>

        {/* Results */}
        <AnimatePresence>
          {showResults && (
            <motion.div
              className="space-y-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ProfileOverview />
              <ContentInsights />
              <MediaAnalysis />
              <StrategyInsights />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
