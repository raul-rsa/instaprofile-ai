import { motion } from "framer-motion";
import { mockData } from "@/data/mockAnalysis";

const stats = [
  { label: "Followers", value: mockData.profile.followers },
  { label: "Following", value: mockData.profile.following },
  { label: "Posts", value: mockData.profile.posts },
  { label: "Engagement", value: mockData.profile.engagementRate },
];

const ProfileOverview = () => (
  <motion.div
    className="analysis-card"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    <h2 className="mb-5 text-lg font-semibold text-foreground">Profile Overview</h2>
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
      <img
        src={mockData.profile.picture}
        alt="Profile"
        className="h-20 w-20 rounded-full object-cover ring-2 ring-border"
      />
      <div className="flex-1 text-center sm:text-left">
        <p className="text-base font-semibold text-foreground">{mockData.profile.username}</p>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="stat-label">{s.label}</p>
              <p className="stat-value">{s.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export default ProfileOverview;
