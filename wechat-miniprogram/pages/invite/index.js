const inviteUrl =
  "https://shaoxiang880-jpg.github.io/?v=540d813&from=mp";

Page({
  data: {
    inviteUrl,
  },

  handleLoad() {},

  handleError(error) {
    console.error("web-view load failed", error);
  },

  onShareAppMessage() {
    return {
      title: "邵翔 & 周钰瑶 · 婚礼请柬",
      path: "/pages/invite/index",
      imageUrl: "/assets/share-card.jpg",
    };
  },

  onShareTimeline() {
    return {
      title: "邵翔 & 周钰瑶 · 婚礼请柬",
      query: "",
      imageUrl: "/assets/share-card.jpg",
    };
  },
});
