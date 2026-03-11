import mockProfile from "@/assets/mock-profile.jpg";

export const mockData = {
  profile: {
    picture: mockProfile,
    username: "@sarah.creates",
    followers: "124.5K",
    following: "892",
    posts: "1,847",
    engagementRate: "4.7%",
  },
  content: {
    avgLikes: "5,832",
    avgComments: "247",
    postingFrequency: "1.2 posts/day",
    bestPost: "Reel about morning routine — 48.2K likes",
  },
  media: {
    videoSummary:
      "Content primarily focuses on lifestyle vlogs, product reviews, and day-in-the-life formats. Videos average 45 seconds with high retention rates in the first 10 seconds.",
    imageDescription:
      "Warm, natural color palette with consistent editing style. Predominantly features flat-lays, self-portraits, and urban outdoor shots.",
    detectedTopics: ["Lifestyle", "Fashion", "Wellness", "Travel", "Food"],
    extractedText:
      "Recurring brand mentions: Glossier, Aritzia, Lululemon. Frequently used hashtags: #dailyroutine #ootd #selfcare",
  },
  strategy: {
    mainTopics: ["Lifestyle & Wellness", "Fashion & Style", "Travel Diaries"],
    suggestedStrategy:
      "Double down on Reels content — 3x higher engagement than static posts. Leverage carousel posts for educational content. Increase story engagement with polls and Q&A stickers.",
    bestPostingTime: "Tues & Thurs, 11:00 AM – 1:00 PM EST",
    engagementQuality: "High — 82% of comments are meaningful (non-emoji, 3+ words)",
  },
};
