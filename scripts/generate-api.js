/**
 * Mostly use the hexo-generator-restful,
 * adding the photos fields and other useful stuffs.
 */

'use strict';

// noinspection NpmUsedModulesInstalled
const pagination = require('hexo-pagination');

// const _pick = require('lodash.pick');

function filterHTMLTags(str) {
  return str ? str
    .replace(/<(?!img|br).*?>/g, '')
    .replace(/\r?\n|\r/g, '')
    .replace(/<img(.*)>/g, ' [Figure] ') : ""
}

function generator(cfg, site) {

  let restful = {
      site: true,
      posts_size: cfg.per_page,
      posts_props: {
        title: true,
        description: true,
        slug: true,
        date: true,
        updated: true,
        comments: true,
        cover: true,
        path: true,
        photos: true,
        text: true,
        raw: false,
        link: true,
        permalink: true,
        excerpt: true,
        content: true,
        type: true,
        sticky: true,
        source: true,
        categories: true,
        tags: true
      },
      categories: true,
      tags: true,
      post: true,
      pages: true,
    },

    posts = site.posts.sort('-date').filter(function (post) {
      return post.published;
    }),

    posts_props = (function () {
      const props = restful.posts_props;

      return function (name, val) {
        return props[name] ? (typeof val === 'function' ? val() : val) : null;
      }
    })(),

    postMap = function (post) {
      return {
        _id: post._id,
        title: posts_props('title', post.title),
        description: posts_props('description', post.description),
        slug: posts_props('slug', post.slug),
        date: posts_props('date', post.date),
        updated: posts_props('updated', post.updated),
        comments: posts_props('comments', post.comments),
        permalink: posts_props('permalink', decodeURIComponent(new URL(post.permalink).pathname)),
        path: posts_props('path', 'api/articles/' + post.slug + '.json'),
        excerpt: posts_props('excerpt', post.excerpt),
        keywords: posts_props('keywords', cfg.keywords),
        content: posts_props('content', post.excerpt ? null : post.content),
        text: posts_props('text', filterHTMLTags(post.content).substring(0, 140)),
        link: posts_props('link', post.link),
        raw: posts_props('raw', post.raw),
        photos: posts_props('photos', post.photos.filter(a => a)),
        type: posts_props('type', post.type),
        sticky: posts_props('sticky', post.sticky),
        source: posts_props('source', post.source),
        categories: posts_props('categories', function () {
          return post.categories.map(function (cat) {
            return {
              name: cat.name,
              slug: cat.slug,
              count: cat.posts.length,
              path: 'api/categories/' + cat.slug + '.json'
            };
          });
        }),
        tags: posts_props('tags', function () {
          return post.tags.map(function (tag) {
            return {
              name: tag.name,
              slug: tag.slug,
              count: tag.posts.length,
              path: 'api/tags/' + tag.slug + '.json'
            };
          });
        })
      };
    },

    cateReduce = function (cates, name) {
      return cates.reduce(function (result, item) {
        if (!item.length) return result;

        return result.concat(pagination(item.path, posts, {
          perPage: 0,
          data: {
            name: item.name,
            slug: item.slug,
            count: item.posts.length,
            path: 'api/' + name + '/' + item.slug + '.json',
            postlist: item.posts.map(postMap)
          }

        }));
      }, []);
    },

    catesMap = function (item) {
      return {
        name: item.data.name,
        path: item.data.path,
        slug: item.data.slug,
        count: item.data.count
      };
    },

    cateMap = function (item) {
      const itemData = item.data;
      return {
        path: itemData.path,
        data: JSON.stringify({
          name: itemData.name,
          slug: itemData.slug,
          count: itemData.count,
          postlist: itemData.postlist
        })
      };
    },

    apiData = [];


  if (restful.site) {
    cfg.posts_links = posts.map(post => ({
      link: decodeURIComponent(new URL(post.permalink).pathname)
        .replace(/\/$/, '').replace(/^\//, ''),
      path: '/api/articles/' + decodeURIComponent(new URL(post.permalink).pathname)
        .replace(/\/$/, '').replace(/^\//, '') + '.json',
      slug: post.slug
    }));
    cfg.pages_links = site.pages.filter(page => !page.type).map(page => ({
      link: decodeURIComponent(new URL(page.permalink).pathname)
        .replace(/\/index\.html$/, '/').replace(/\.html$/, '')
        .replace(/\/$/, '').replace(/^\//, ''),
      path: '/api/pages/' + page.source.replace(/\.md$/, '.json'),
      source: page.source.replace(/\.md$/, '')
    }));
    apiData.push({
      path: 'api/site.json',
      data: JSON.stringify(/*restful.site instanceof Array ? _pick(cfg, restful.site) :*/ cfg)
    });
  }

  if (restful.categories) {
    const categories = site.categories;

    const cates = cateReduce(categories, 'categories');

    if (!!cates.length) {
      apiData.push({
        path: 'api/categories.json',
        data: JSON.stringify(cates.map(catesMap))
      });

      const catesMaps = cates.map(cateMap);
      apiData = apiData.concat(catesMaps);
    }

  }

  if (restful.tags) {
    const tags = cateReduce(site.tags, 'tags');

    if (tags.length) {
      apiData.push({
        path: 'api/tags.json',
        data: JSON.stringify(tags.map(catesMap))
      });

      apiData = apiData.concat(tags.map(cateMap));
    }

  }

  const postlist = posts.map(postMap);

  if (restful.posts_size > 0) {

    const page_posts = [],
      len = postlist.length,
      ps = restful.posts_size,
      pc = Math.ceil(len / ps);

    for (let i = 0; i < len; i += ps) {
      page_posts.push({
        path: 'api/posts/' + Math.ceil((i + 1) / ps) + '.json',
        data: JSON.stringify({
          total: len,
          pageSize: ps,
          pageCount: pc,
          data: postlist.slice(i, i + ps)
        })
      });
    }

    apiData.push({
      path: 'api/posts.json',
      data: page_posts[0].data
    });

    apiData = apiData.concat(page_posts);

  } else {

    apiData.push({
      path: 'api/posts/1.json',
      data: JSON.stringify({
        total: postlist.length,
        pageSize: postlist.length,
        pageCount: 1,
        data: postlist
      })
    });
  }

  if (restful.post) {
    apiData = apiData.concat(posts.map(function (post) {
      const path = 'api/articles/' + decodeURIComponent(new URL(post.permalink).pathname)
        .replace(/\/$/, '').replace(/^\//, '') + '.json';
      const prev = post.prev ? post.prev : null;
      const next = post.next ? post.next : null;
      return {
        path: path,
        data: JSON.stringify({
          title: post.title,
          slug: post.slug,
          date: post.date,
          updated: post.updated,
          comments: post.comments,
          path: path,
          photos: post.photos.filter(a => a),
          link: post.link,
          excerpt: filterHTMLTags(post.excerpt),
          keywords: cfg.keyword,
          content: post.content,
          prev: prev ? {
            title: prev.title,
            link: '/' + decodeURIComponent(new URL(prev.permalink).pathname)
              .replace(/\/index\.html$/, '/').replace(/\.html$/, '')
              .replace(/\/$/, '').replace(/^\//, ''),
          } : null,
          next: next ? {
            title: next.title,
            link: '/' + decodeURIComponent(new URL(next.permalink).pathname)
              .replace(/\/index\.html$/, '/').replace(/\.html$/, '')
              .replace(/\/$/, '').replace(/^\//, ''),
          } : null,
          categories: post.categories.map(function (cat) {
            return {
              name: cat.name,
              slug: cat.slug,
              count: cat.posts.length,
              path: 'api/categories/' + cat.slug + '.json'
            };
          }),
          tags: post.tags.map(function (tag) {
            return {
              name: tag.name,
              slug: tag.slug,
              count: tag.posts.length,
              path: 'api/tags/' + tag.slug + '.json'
            };
          })
        })
      };
    }));
  }

  if (restful.pages) {
    apiData = apiData.concat(site.pages.data.map(function (page) {
      const sourceMappedPath = page.source.replace(/\.md$/, '.json');
      const path = 'api/pages/' + sourceMappedPath;
      return {
        path: path,
        data: JSON.stringify({
          title: page.title,
          date: page.date,
          updated: page.updated,
          comments: page.comments,
          path: path,
          photos: page.photos,
          excerpt: filterHTMLTags(page.excerpt),
          content: page.content
        })
      };
    }));
  }

  return apiData;
}

hexo.extend.generator.register('json-content', function (site) {
  return generator(Object.assign({}, hexo.config, {
    theme_config: hexo.theme.config
  }, {version: hexo.version}), site);
});
