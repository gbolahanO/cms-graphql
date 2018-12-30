import User from '../models/User'
import Post from '../models/Post'
const Mutation = {
  createPost: async (_, { data }, ctx, info) => {
    let post = await Post.create(data);
    return post;
  },
  createUser: async (_, { data }, ctx, info) => {
    let user = await User.create(data);
    return user;
  }
}

export default Mutation