export const withBaseAsset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const ASSETS = {
  // 1. 开场封面 - 全屏背景视频（循环播放，15-30秒）
  heroVideo: withBaseAsset("assets/video/hero-bg.mp4"),
  heroPoster: withBaseAsset("assets/images/hero-poster.jpg"),
  // 1.1 开场标题叠加图（透明PNG，盖在视频上）
  heroTitleOverlay: withBaseAsset("assets/images/wedding-title-overlay-transparent-final.png"),

  // 2. 诚挚邀请 - 新人主合照（竖版最佳）
  coupleMain: withBaseAsset("assets/images/couple-main.jpg"),

  // 3. 爱情故事 - 照片轮播（建议3-5张方形照片）
  storyPhotos: [
    withBaseAsset("assets/images/story/story-1.jpg"),
    withBaseAsset("assets/images/story/story-2.jpg"),
    withBaseAsset("assets/images/story/story-3.jpg"),
    withBaseAsset("assets/images/story/story-4.jpg"),
    withBaseAsset("assets/images/story/story-5.jpg"),
  ],

  // 4. 婚礼详情 - 背景装饰图（横版）
  infoBackground: withBaseAsset("assets/images/info-bg.jpg"),

  // 5. RSVP回执 - 装饰小图
  rsvpDecoration: withBaseAsset("assets/images/rsvp-deco.jpg"),

  // 6. 封底致谢 - 背景图（横版）
  footerBackground: withBaseAsset("assets/images/footer-bg.jpg"),
} as const;

export type AssetKey = keyof typeof ASSETS;
