// https://hexo.io/zh-cn/docs/configuration.html

export interface HexoConfig {
  title: string;
  subtitle?: any;
  description?: any;
  author: string;
  language: string;
  timezone?: any;
  url: string;
  root: string;
  permalink: string;
  permalink_defaults?: any;
  source_dir: string;
  public_dir: string;
  tag_dir: string;
  archive_dir: string;
  category_dir: string;
  code_dir: string;
  i18n_dir: string;
  skip_render?: any;
  new_post_name: string;
  default_layout: string;
  titlecase: boolean;
  external_link: boolean;
  filename_case: number;
  render_drafts: boolean;
  post_asset_folder: boolean;
  relative_link: boolean;
  future: boolean;
  highlight: Highlight;
  default_category: string;
  category_map?: any;
  tag_map?: any;
  date_format: string;
  time_format: string;
  per_page: number;
  pagination_dir: string;
  theme: string;
  deploy: Deploy;
  ignore: any[];
  disqus_shortname: string;
  marked: Marked;
  archive_generator: ArchiveGenerator;
  category_generator: CategoryGenerator;
  index_generator: IndexGenerator;
  sitemap: Sitemap;
  feed: Feed;
  tag_generator: CategoryGenerator;
  server: Server;
  theme_config: ThemeConfig;
}

export interface ThemeConfig {
  override: boolean;
  cache: Cache;
  favicon: Favicon;
  rss?: any;
  footer: Footer;
  canonical: boolean;
  seo: boolean;
  index_with_subtitle: boolean;
  menu: Menu;
  menu_settings: Menusettings;
  scheme: string;
  site_state: boolean;
  social_icons: Socialicons;
  links_icon: string;
  links_title: string;
  links_layout: string;
  avatar: Avatar;
  toc: Toc;
  sidebar: Sidebar;
  scroll_to_more: boolean;
  save_scroll: boolean;
  excerpt_description: boolean;
  auto_excerpt: Autoexcerpt;
  post_meta: Postmeta;
  symbols_count_time: Symbolscounttime;
  codeblock: Codeblock;
  related_posts: Relatedposts;
  post_copyright: Postcopyright;
  post_edit: Postedit;
  mobile_layout_economy: boolean;
  android_chrome_color: string;
  custom_logo: Customlogo;
  highlight_theme: string;
  cheers_enabled: boolean;
  font: Font;
  math: Math;
  han: boolean;
  pangu: boolean;
  disqus: Disqus;
  changyan: Changyan;
  valine: Valine;
  gitment: Gitment;
  needmoreshare2: Needmoreshare2;
  facebook_sdk: Facebooksdk;
  facebook_comments_plugin: FacebookCommentsPlugin;
  vkontakte_api: Vkontakteapi;
  rating: Rating;
  leancloud_visitors: LeancloudVisitors;
  firestore: Firestore;
  busuanzi_count: BusuanziCount;
  baidu_push: boolean;
  calendar: Calendar;
  algolia_search: Algoliasearch;
  local_search: Localsearch;
  bookmark: Bookmark;
  exturl: boolean;
  note: Note;
  label: boolean;
  tabs: Tabs;
  reading_progress: Readingprogress;
  motion: Motion;
  fancybox: boolean;
  fastclick: boolean;
  lazyload: boolean;
  pace: boolean;
  pace_theme: string;
  canvas_nest: boolean;
  three_waves: boolean;
  canvas_lines: boolean;
  canvas_sphere: boolean;
  canvas_ribbon: Canvasribbon;
  vendors: Vendors;
  css: string;
  js: string;
  images: string;
  pjax: Cache;
  aplayer: Cache;
}

export interface Vendors {
  _internal: string;
  jquery?: any;
  fancybox?: any;
  fancybox_css?: any;
  fastclick?: any;
  lazyload?: any;
  velocity?: any;
  velocity_ui?: any;
  ua_parser?: any;
  fontawesome?: any;
  algolia_instant_js?: any;
  algolia_instant_css?: any;
  pace?: any;
  pace_css?: any;
  canvas_nest?: any;
  three?: any;
  three_waves?: any;
  canvas_lines?: any;
  canvas_sphere?: any;
  canvas_ribbon?: any;
  Han?: any;
  pangu?: any;
  needmoreshare2_js?: any;
  needmoreshare2_css?: any;
  bookmark?: any;
  reading_progress?: any;
  valine?: any;
}

export interface Canvasribbon {
  enable: boolean;
  size: number;
  alpha: number;
  zIndex: number;
}

export interface Motion {
  enable: boolean;
  async: boolean;
  transition: Transition2;
}

export interface Transition2 {
  post_block: string;
  post_header: string;
  post_body: string;
  coll_header: string;
  sidebar: string;
}

export interface Readingprogress {
  enable: boolean;
  color: string;
  height: string;
}

export interface Tabs {
  enable: boolean;
  transition: Transition;
  border_radius: number;
}

export interface Transition {
  tabs: boolean;
  labels: boolean;
}

export interface Note {
  style: string;
  icons: boolean;
  border_radius: number;
  light_bg_offset: number;
}

export interface Bookmark {
  enable: boolean;
  save: string;
}

export interface Localsearch {
  enable: boolean;
  trigger: string;
  top_n_per_article: number;
  unescape: boolean;
}

export interface Algoliasearch {
  enable: boolean;
  hits: CategoryGenerator;
  labels: Labels;
}

export interface Labels {
  input_placeholder: string;
  hits_empty: string;
  hits_stats: string;
}

export interface Calendar {
  enable: boolean;
  calendar_id: string;
  api_key: string;
  orderBy: string;
  offsetMax: number;
  offsetMin: number;
  timeZone?: any;
  showDeleted: boolean;
  singleEvents: boolean;
  maxResults: number;
}

export interface BusuanziCount {
  enable: boolean;
  total_visitors: boolean;
  total_visitors_icon: string;
  total_views: boolean;
  total_views_icon: string;
  post_views: boolean;
  post_views_icon: string;
}

export interface Firestore {
  enable: boolean;
  collection: string;
  apiKey?: any;
  projectId?: any;
  bluebird: boolean;
}

export interface LeancloudVisitors {
  enable: boolean;
  app_id?: any;
  app_key?: any;
  security: boolean;
  betterPerformance: boolean;
}

export interface Rating {
  enable: boolean;
  id?: any;
  color: string;
}

export interface Vkontakteapi {
  enable: boolean;
  app_id?: any;
  like: boolean;
  comments: boolean;
  num_of_posts: number;
}

export interface FacebookCommentsPlugin {
  enable: boolean;
  num_of_posts: number;
  width: string;
  scheme: string;
}

export interface Facebooksdk {
  enable: boolean;
  app_id?: any;
  fb_admin?: any;
  like_button?: any;
  webmaster?: any;
}

export interface Needmoreshare2 {
  enable: boolean;
  postbottom: Postbottom;
  float: Postbottom;
}

export interface Postbottom {
  enable: boolean;
  options: Options;
}

export interface Options {
  iconStyle: string;
  boxForm: string;
  position: string;
  networks: string;
}

export interface Gitment {
  enable: boolean;
  mint: boolean;
  count: boolean;
  lazy: boolean;
  cleanly: boolean;
  language?: any;
  github_user?: any;
  github_repo?: any;
  client_id?: any;
  client_secret?: any;
  proxy_gateway?: any;
  redirect_protocol?: any;
}

export interface Valine {
  enable: boolean;
  appid?: any;
  appkey?: any;
  notify: boolean;
  verify: boolean;
  placeholder: string;
  avatar: string;
  guest_info: string;
  pageSize: number;
  visitor: boolean;
}

export interface Changyan {
  enable: boolean;
  appid?: any;
  appkey?: any;
}

export interface Disqus {
  enable: boolean;
  shortname?: any;
  count: boolean;
  lazyload: boolean;
}

export interface Math {
  enable: boolean;
  per_page: boolean;
  engine: string;
  mathjax: Mathjax;
  katex: Mathjax;
}

export interface Mathjax {
  cdn: string;
}

export interface Font {
  enable: boolean;
  host?: any;
  global: Global;
  headings: Headings;
  posts: Posts;
  logo: Headings;
  codes: Headings;
}

export interface Posts {
  external: boolean;
  family?: any;
}

export interface Headings {
  external: boolean;
  family?: any;
  size?: any;
}

export interface Global {
  external: boolean;
  family: string;
  size?: any;
}

export interface Customlogo {
  enabled: boolean;
  image?: any;
}

export interface Postedit {
  enable: boolean;
  url: string;
}

export interface Postcopyright {
  enable: boolean;
  license: string;
}

export interface Relatedposts {
  enable: boolean;
  title?: any;
  display_in_home: boolean;
  params: Params;
}

export interface Params {
  maxCount: number;
}

export interface Codeblock {
  border_radius?: any;
  copy_button: Copybutton;
}

export interface Copybutton {
  enable: boolean;
  show_result: boolean;
}

export interface Symbolscounttime {
  separated_meta: boolean;
  item_text_post: boolean;
  item_text_total: boolean;
  awl: number;
  wpm: number;
}

export interface Postmeta {
  item_text: boolean;
  created_at: boolean;
  updated_at: Updatedat;
  categories: boolean;
}

export interface Updatedat {
  enabled: boolean;
  another_day: boolean;
}

export interface Autoexcerpt {
  enable: boolean;
  length: number;
}

export interface Sidebar {
  position: string;
  display: string;
  offset: number;
  b2t: boolean;
  scrollpercent: boolean;
  onmobile: boolean;
}

export interface Toc {
  enable: boolean;
  number: boolean;
  wrap: boolean;
}

export interface Avatar {
  url?: any;
  rounded: boolean;
  opacity: number;
  rotated: boolean;
}

export interface Socialicons {
  enable: boolean;
  icons_only: boolean;
  transition: boolean;
  exturl: boolean;
}

export interface Menusettings {
  icons: boolean;
  badges: boolean;
}

export interface Menu {
  home: string;
  archives: string;
}

export interface Footer {
  icon: Icon;
  copyright?: any;
  powered: Powered;
  theme: Powered;
}

export interface Powered {
  enable: boolean;
  version: boolean;
}

export interface Icon {
  name: string;
  animated: boolean;
  color: string;
}

export interface Favicon {
  small: string;
  medium: string;
  apple_touch_icon: string;
  safari_pinned_tab: string;
}

export interface Cache {
  enable: boolean;
}

export interface Server {
  port: number;
  log: boolean;
  compress: boolean;
  header: boolean;
}

export interface Feed {
  type: string;
  limit: number;
  hub: string;
  content: boolean;
  content_limit: number;
  content_limit_delim: string;
  path: string;
}

export interface Sitemap {
  path: string;
}

export interface IndexGenerator {
  per_page: number;
  order_by: string;
}

export interface CategoryGenerator {
  per_page: number;
}

export interface ArchiveGenerator {
  per_page: number;
  yearly: boolean;
  monthly: boolean;
  daily: boolean;
}

export interface Marked {
  gfm: boolean;
  pedantic: boolean;
  sanitize: boolean;
  tables: boolean;
  breaks: boolean;
  smartLists: boolean;
  smartypants: boolean;
  modifyAnchors: string;
  autolink: boolean;
}

export interface Deploy {
  type: string;
  repo: string;
}

export interface Highlight {
  enable: boolean;
  auto_detect: boolean;
  line_number: boolean;
  tab_replace?: any;
}
