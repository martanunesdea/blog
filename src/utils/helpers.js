export function getSimplifiedPosts(posts, options = {}) {
    return posts.map((post) => ({
      id: post.node.id,
      slug: post.node.fields.slug,
      tags: post.node.frontmatter.tags,
      title: post.node.frontmatter.title,
    }))
  }