import React from "react"
import { navigate } from "gatsby"
import blogItemStyles from "./blogItem.module.scss"
const BlogItem = ({ img, post }) => {
  const goToSlug = () => navigate(`/blog/${post.slug}`)

  return (
    <div
      role="link"
      tabIndex={0}
      key={post.slug}
      className={blogItemStyles.container}
      onClick={goToSlug}
      onKeyDown={goToSlug}
    >
      <div className={blogItemStyles.firstBox}>
        <img src={img} alt="freg" />
        <div className={blogItemStyles.title}>{post.title}</div>
        {/* <div className={blogItemStyles.date}>{post.publishedDate}</div> */}
        {/* <div className={blogItemStyles.author}>
          <span style={{ fontSize: "1rem" }}>by</span> {post.author.name}
        </div> */}
      </div>
      <div></div>
    </div>
  )
}
export default BlogItem
