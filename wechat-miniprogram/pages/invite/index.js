const shareTitle = "邵翔 & 周钰瑶 · 婚礼请柬";

Page({
  data: {
    heroImage: "/assets/images/couple-main.jpg",
    storyImage: "/assets/images/story-1.jpg",
    closingImage: "/assets/images/closing-photo.jpg",
    timeline: [
      {
        title: "宾客入场",
        en: "Guest admission",
        time: "AM 10:30",
      },
      {
        title: "婚礼仪式",
        en: "Wedding ceremony",
        time: "AM 11:08",
      },
      {
        title: "婚礼午宴",
        en: "Wedding luncheon",
        time: "PM 12:08",
      },
    ],
  },

  openLocation() {
    wx.openLocation({
      latitude: 29.8633,
      longitude: 121.5392,
      name: "天港禧悦 · 宴会中心",
      address: "浙江省宁波市海曙区丽园南路",
      scale: 16,
    });
  },

  onShareAppMessage() {
    return {
      title: shareTitle,
      path: "/pages/invite/index",
      imageUrl: "/assets/share-card.jpg",
    };
  },

  onShareTimeline() {
    return {
      title: shareTitle,
      query: "",
      imageUrl: "/assets/share-card.jpg",
    };
  },
});
