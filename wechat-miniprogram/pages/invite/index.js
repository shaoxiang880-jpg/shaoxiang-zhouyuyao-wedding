const shareTitle = "邵翔 & 周钰瑶 · 婚礼请柬";

Page({
  data: {
    magazinePages: [
      "/assets/magazine/page-01.jpg",
      "/assets/magazine/page-02.jpg",
      "/assets/magazine/page-03.jpg",
      "/assets/magazine/page-04.jpg",
      "/assets/magazine/page-05.jpg",
      "/assets/magazine/page-06.jpg",
      "/assets/magazine/page-07.jpg",
      "/assets/magazine/page-08.jpg",
    ],
    timeline: [
      { title: "宾客入场", time: "AM 10:30" },
      { title: "婚礼仪式", time: "AM 11:08" },
      { title: "婚礼午宴", time: "PM 12:08" },
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
