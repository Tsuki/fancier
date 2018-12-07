// https://hexo.io/zh-cn/docs/configuration.html

export interface Highlight {
  enable: boolean;
  auto_detect: boolean;
  line_number: boolean;
  tab_replace?: any;
}

export interface Deploy {
  type: string;
  repo: string;
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

export interface Feed {
  type: string;
  limit: number;
  hub: string;
  content: boolean;
  content_limit: number;
  content_limit_delim: string;
  path: string;
}

export interface Category_generator {
  per_page: number;
}

export interface Index_generator {
  per_page: number;
  order_by: string;
}

export interface Sitemap {
  path: string;
}

export interface Archive_generator {
  per_page: number;
  yearly: boolean;
  monthly: boolean;
  daily: boolean;
}

export interface Tag_generator {
  per_page: number;
}

export interface Server {
  port: number;
  log: boolean;
  compress: boolean;
  header: boolean;
}

export interface Menu {
  home: string;
  categories: string;
  archives: string;
  about: string;
}

export interface Pjax {
  enable: boolean;
}

export interface Aplayer {
  enable: boolean;
}

export interface Disqu {
  enable: boolean;
  shortname: string;
  count: boolean;
  lazyload: boolean;
}

export interface Social {
  gitHub: string;
}

export interface Link {
  poiScript: string;
  夢路: string;
}

export interface Auto_excerpt {
  enable: boolean;
  length: number;
}

export interface Custom_file_path {
  header: string;
  sidebar: string;
}

export interface Cache {
  enable: boolean;
}

export interface Favicon {
  small: string;
  medium: string;
  apple_touch_icon: string;
  safari_pinned_tab: string;
}

export interface Icon {
  name: string;
  animated: boolean;
  color: string;
}

export interface Powered {
  enable: boolean;
  version: boolean;
}

export interface Theme {
  enable: boolean;
  version: boolean;
}

export interface Footer {
  icon: Icon;
  copyright?: any;
  powered: Powered;
  theme: Theme;
}

export interface Menu {
  home: string;
  archives: string;
  categories: string;
  about: string;
}

export interface Menu_setting {
  icons: boolean;
  badges: boolean;
}

export interface Social_icon {
  enable: boolean;
  icons_only: boolean;
  transition: boolean;
  exturl: boolean;
}

export interface Avatar {
  url?: any;
  rounded: boolean;
  opacity: number;
  rotated: boolean;
}

export interface Toc {
  enable: boolean;
  number: boolean;
  wrap: boolean;
}

export interface Sidebar {
  position: string;
  display: string;
  offset: number;
  b2t: boolean;
  scrollpercent: boolean;
  onmobile: boolean;
}

export interface Auto_excerpt {
  enable: boolean;
  length: number;
}

export interface Updated_at {
  enabled: boolean;
  another_day: boolean;
}

export interface Post_meta {
  item_text: boolean;
  created_at: boolean;
  updated_at: Updated_at;
  categories: boolean;
}

export interface Symbols_count_time {
  separated_meta: boolean;
  item_text_post: boolean;
  item_text_total: boolean;
  awl: number;
  wpm: number;
}

export interface Copy_button {
  enable: boolean;
  show_result: boolean;
}

export interface Codeblock {
  border_radius?: any;
  copy_button: Copy_button;
}

export interface Param {
  maxCount: number;
}

export interface Related_post {
  enable: boolean;
  title?: any;
  display_in_home: boolean;
  params: Param;
}

export interface Post_copyright {
  enable: boolean;
  license: string;
}

export interface Post_edit {
  enable: boolean;
  url: string;
}

export interface Custom_logo {
  enabled: boolean;
  image?: any;
}

export interface Global {
  external: boolean;
  family: string;
  size?: any;
}

export interface Heading {
  external: boolean;
  family?: any;
  size?: any;
}

export interface Post {
  external: boolean;
  family?: any;
}

export interface Logo {
  external: boolean;
  family?: any;
  size?: any;
}

export interface Code {
  external: boolean;
  family?: any;
  size?: any;
}

export interface Font {
  enable: boolean;
  host?: any;
  global: Global;
  headings: Heading;
  posts: Post;
  logo: Logo;
  codes: Code;
}

export interface Mathjax {
  cdn: string;
}

export interface Katex {
  cdn: string;
}

export interface Math {
  enable: boolean;
  per_page: boolean;
  engine: string;
  mathjax: Mathjax;
  katex: Katex;
}

export interface Disqu {
  enable: boolean;
  shortname: string;
  count: boolean;
  lazyload: boolean;
}

export interface Changyan {
  enable: boolean;
  appid?: any;
  appkey?: any;
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

export interface Option {
  iconStyle: string;
  boxForm: string;
  position: string;
  networks: string;
}

export interface Postbottom {
  enable: boolean;
  options: Option;
}

export interface Option {
  iconStyle: string;
  boxForm: string;
  position: string;
  networks: string;
}

export interface Float {
  enable: boolean;
  options: Option;
}

export interface Needmoreshare2 {
  enable: boolean;
  postbottom: Postbottom;
  float: Float;
}

export interface Facebook_sdk {
  enable: boolean;
  app_id?: any;
  fb_admin?: any;
  like_button?: any;
  webmaster?: any;
}

export interface Facebook_comments_plugin {
  enable: boolean;
  num_of_posts: number;
  width: string;
  scheme: string;
}

export interface Vkontakte_api {
  enable: boolean;
  app_id?: any;
  like: boolean;
  comments: boolean;
  num_of_posts: number;
}

export interface Rating {
  enable: boolean;
  id?: any;
  color: string;
}

export interface Leancloud_visitor {
  enable: boolean;
  app_id?: any;
  app_key?: any;
  security: boolean;
  betterPerformance: boolean;
}

export interface Firestore {
  enable: boolean;
  collection: string;
  apiKey?: any;
  projectId?: any;
  bluebird: boolean;
}

export interface Busuanzi_count {
  enable: boolean;
  total_visitors: boolean;
  total_visitors_icon: string;
  total_views: boolean;
  total_views_icon: string;
  post_views: boolean;
  post_views_icon: string;
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

export interface Hit {
  per_page: number;
}

export interface Label {
  input_placeholder: string;
  hits_empty: string;
  hits_stats: string;
}

export interface Algolia_search {
  enable: boolean;
  hits: Hit;
  labels: Label;
}

export interface Local_search {
  enable: boolean;
  trigger: string;
  top_n_per_article: number;
  unescape: boolean;
}

export interface Bookmark {
  enable: boolean;
  save: string;
}

export interface Note {
  style: string;
  icons: boolean;
  border_radius: number;
  light_bg_offset: number;
}

export interface Transition {
  tabs: boolean;
  labels: boolean;
}

export interface Tab {
  enable: boolean;
  transition: Transition;
  border_radius: number;
}

export interface Reading_progres {
  enable: boolean;
  color: string;
  height: string;
}

export interface Transition {
  post_block: string;
  post_header: string;
  post_body: string;
  coll_header: string;
  sidebar: string;
}

export interface Motion {
  enable: boolean;
  async: boolean;
  transition: Transition;
}

export interface Canvas_ribbon {
  enable: boolean;
  size: number;
  alpha: number;
  zIndex: number;
}

export interface Vendor {
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
  han?: any;
  pangu?: any;
  needmoreshare2_js?: any;
  needmoreshare2_css?: any;
  bookmark?: any;
  reading_progress?: any;
  valine?: any;
}

export interface Pjax {
  enable: boolean;
}

export interface Aplayer {
  enable: boolean;
}

export interface Social {
  gitHub: string;
}

export interface Link {
  poiScript: string;
  夢路: string;
}

export interface Custom_file_path {
  header: string;
  sidebar: string;
}

export interface Theme_config {
  override: boolean;
  exclude: string[];
  cache: Cache;
  favicon: Favicon;
  rss?: any;
  footer: Footer;
  canonical: boolean;
  seo: boolean;
  index_with_subtitle: boolean;
  menu: Menu;
  menu_settings: Menu_setting;
  scheme: string;
  site_state: boolean;
  social_icons: Social_icon;
  links_icon: string;
  links_title: string;
  links_layout: string;
  avatar: Avatar;
  toc: Toc;
  sidebar: Sidebar;
  scroll_to_more: boolean;
  save_scroll: boolean;
  excerpt_description: boolean;
  auto_excerpt: Auto_excerpt;
  post_meta: Post_meta;
  symbols_count_time: Symbols_count_time;
  codeblock: Codeblock;
  related_posts: Related_post;
  post_copyright: Post_copyright;
  post_edit: Post_edit;
  mobile_layout_economy: boolean;
  android_chrome_color: string;
  custom_logo: Custom_logo;
  highlight_theme: string;
  cheers_enabled: boolean;
  font: Font;
  math: Math;
  han: boolean;
  pangu: boolean;
  disqus: Disqu;
  changyan: Changyan;
  valine: Valine;
  gitment: Gitment;
  needmoreshare2: Needmoreshare2;
  facebook_sdk: Facebook_sdk;
  facebook_comments_plugin: Facebook_comments_plugin;
  vkontakte_api: Vkontakte_api;
  rating: Rating;
  leancloud_visitors: Leancloud_visitor;
  firestore: Firestore;
  busuanzi_count: Busuanzi_count;
  baidu_push: boolean;
  calendar: Calendar;
  algolia_search: Algolia_search;
  local_search: Local_search;
  bookmark: Bookmark;
  exturl: boolean;
  note: Note;
  label: boolean;
  tabs: Tab;
  reading_progress: Reading_progres;
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
  canvas_ribbon: Canvas_ribbon;
  vendors: Vendor;
  css: string;
  js: string;
  images: string;
  pjax: Pjax;
  aplayer: Aplayer;
  google_site_verification: string;
  google_analytics: string;
  social: Social;
  links: Link;
  custom_file_path: Custom_file_path;
}

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
  feed: Feed;
  category_generator: Category_generator;
  index_generator: Index_generator;
  sitemap: Sitemap;
  archive_generator: Archive_generator;
  tag_generator: Tag_generator;
  server: Server;
  scheme: string;
  menu: Menu;
  pjax: Pjax;
  aplayer: Aplayer;
  google_site_verification: string;
  google_analytics: string;
  disqus: Disqu;
  social: Social;
  links: Link;
  auto_excerpt: Auto_excerpt;
  fancybox: boolean;
  custom_file_path: Custom_file_path;
  theme_config: Theme_config;
}
