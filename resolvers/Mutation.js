import bcrypt from 'bcryptjs'
import User from '../models/User'
import Post from '../models/Post'
const Mutation = {
  createPost: async (_, { data }, ctx, info) => {
    let post = await Post.create(data);
    return post;
  },
  createUser: async (_, args, ctx, info) => {
    const { firstname, lastname, email, password } = args.data
    
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt)

    let user = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword
    });
    return user;
  }
}

export default Mutation