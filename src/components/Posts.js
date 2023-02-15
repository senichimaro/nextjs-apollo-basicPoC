/** Blog structure
 * Assume that has at least two essential pages:
 * posts : for fetching and displaying all the blog posts
 * post : for fetching and displaying a specific blog post
 */

export default function Posts({ posts }) {
    return (
      <div>
        <h1>My latest posts</h1>
        {posts.map((post) => (
          <h2>{post.title}</h2>
        ))}
      </div>
    );
  }
  
  export async function getStaticProps() {
    return {
      props: { 
        posts: await fetchPosts(),
      }
    }
}