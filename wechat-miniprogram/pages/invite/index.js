const shareTitle = "邵翔 & 周钰瑶 · 婚礼请柬";

Page({
  data: {
    showOpening: true,
    openingLeaving: false,
    showOpeningEndPoster: false,
    openingVideo: "/assets/opening/invitation-opening.mp4",
    openingPoster: "/assets/opening/invitation-opening-poster.jpg",
    openingEndPoster: "/assets/opening/invitation-opening-end.jpg",
    heroPreview: "/assets/h5/couple-main-preview.jpg",
    heroImage: "/assets/h5/couple-main.jpg",
    envelopePhoto: "/assets/h5/envelope-photo.jpg",
    closingPhoto: "/assets/h5/closing-photo.jpg",
    polaroidPhoto: "/assets/h5/story/story-0-polaroid.jpg",
    storyPhotos: [
      "/assets/h5/story/story-1.jpg",
      "/assets/h5/story/story-2.jpg",
      "/assets/h5/story/story-3.jpg",
      "/assets/h5/story/story-4.jpg",
      "/assets/h5/story/story-5.jpg",
      "/assets/h5/story/story-6.jpg",
      "/assets/h5/story/story-7.jpg",
      "/assets/h5/story/story-8.jpg",
    ],
    gridPhotos: [
      "/assets/h5/story/story-2.jpg",
      "/assets/h5/story/story-3.jpg",
      "/assets/h5/story/story-4.jpg",
      "/assets/h5/story/story-5.jpg",
    ],
    timeline: [
      { title: "宾客入场", en: "Guest admission", time: "AM 10:30" },
      { title: "婚礼仪式", en: "Wedding ceremony", time: "AM 11:08" },
      { title: "婚礼午宴", en: "Wedding luncheon", time: "PM 12:08" },
    ],
  },

  onReady() {
    this.openingFallbackTimer = setTimeout(() => {
      this.hideOpening(false);
    }, 8000);
  },

  onUnload() {
    if (this.openingFallbackTimer) {
      clearTimeout(this.openingFallbackTimer);
      this.openingFallbackTimer = null;
    }
    if (this.openingHoldTimer) {
      clearTimeout(this.openingHoldTimer);
      this.openingHoldTimer = null;
    }
    if (this.openingLeaveTimer) {
      clearTimeout(this.openingLeaveTimer);
      this.openingLeaveTimer = null;
    }
  },

  onOpeningEnded() {
    this.hideOpening(true);
  },

  onOpeningError() {
    this.hideOpening(false);
  },

  skipOpening() {
    this.hideOpening(true);
  },

  hideOpening(useEndPoster = true) {
    if (!this.data.showOpening || this.data.openingLeaving) return;

    if (this.openingFallbackTimer) {
      clearTimeout(this.openingFallbackTimer);
      this.openingFallbackTimer = null;
    }

    if (useEndPoster) {
      this.setData({ showOpeningEndPoster: true });
    }

    this.openingHoldTimer = setTimeout(() => {
      this.setData({ openingLeaving: true });

      this.openingLeaveTimer = setTimeout(() => {
        this.setData({
          showOpening: false,
          openingLeaving: false,
          showOpeningEndPoster: false,
        });
        this.openingLeaveTimer = null;
      }, 560);
    }, useEndPoster ? 300 : 0);
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
