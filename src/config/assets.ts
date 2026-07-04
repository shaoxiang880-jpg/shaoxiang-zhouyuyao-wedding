export const withBaseAsset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const ASSETS = {
  // 1. 开场封面 - 主婚纱照（画报风格大图）
  coupleMain: withBaseAsset("assets/images/couple-main.jpg"),

  // 2. 信封区域照片
  envelopePhoto: withBaseAsset("assets/images/envelope-photo.jpg"),

  // 3. 爱情故事 - 照片轮播/画廊
  storyPhotos: [
    withBaseAsset("assets/images/story/story-1.jpg"),
    withBaseAsset("assets/images/story/story-2.jpg"),
    withBaseAsset("assets/images/story/story-3.jpg"),
    withBaseAsset("assets/images/story/story-4.jpg"),
    withBaseAsset("assets/images/story/story-5.jpg"),
    withBaseAsset("assets/images/story/story-6.jpg"),
    withBaseAsset("assets/images/story/story-7.jpg"),
    withBaseAsset("assets/images/story/story-8.jpg"),
  ],

  // 4. 结尾照片
  closingPhoto: withBaseAsset("assets/images/closing-photo.jpg"),

  // 5. 背景音乐
  bgm: withBaseAsset("assets/audio/bgm.mp3"),
} as const;

export type AssetKey = keyof typeof ASSETS;
