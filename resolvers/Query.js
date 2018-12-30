import User from '../models/User'
import Post from '../models/Post'

const Query = {
  getAllPost: async (_, args, ctx, info) => {
    const posts = await Post.findAll();
    return posts
  },
  getPostById: async (_, { id }, ctx, info) => {
    const singlePost = await Post.findOne({
      where: {
        id
      }
    })
    return singlePost
  },
  getUser: async (_, { id }, ctx, info) => {
    const user = await User.findOne({
      where: {
        id
      }
    })
    return user
  }
}

export default Query