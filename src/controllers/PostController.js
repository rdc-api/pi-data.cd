import { Post, Share, Like } from '../models';
import { statusCodes, responseMessages } from '../constants';
/**
 * @description Post Controller class
 */
export default class PostController {
  /**
   * @author Olivier
   * @param {Object} req
   * @param {Object} res
   * @param {*} next
   * @returns {Object} Returns the response
   */
  static async createPost(req, res) {
    const { currentUser, body } = req;
    const author = {
      username: currentUser.username,
      email: currentUser.email,
      image: currentUser.image,
    };

    const post = await Post.create({
      ...body,
      author: currentUser._id,
      userType: currentUser.userType,
    });

    notifEvents.emit('create-index', {
      title: post.title || post.description,
      objectID: post.slug,
      resource: 'post',
      category: post.type || 'general',
      image: post.image,
      keywords: `${post.tags.join(' ')} ${post.description}`,
    });

    return res.status(statusCodes.OK).json({
      status: statusCodes.OK,
      post: {
        ...post.toObject(),
        author,
        __v: undefined,
      },
      message: responseMessages.created('Post'),
    });
  }

  /**
   * @author Olivier
   * @param {Object} req
   * @param {Object} res
   * @param {*} next
   * @returns {Object} Returns the response
   */
  static async updatePost(req, res) {
    const { currentUser, body, post } = req;

    if (!currentUser._id.equals(post.author && post.author._id)) {
      return res.status(statusCodes.UNAUTHORIZED).json({
        status: statusCodes.UNAUTHORIZED,
        message: responseMessages.unauthorized(),
      });
    }

    await post.updateOne({ ...body });

    notifEvents.emit('update-index', {
      title: post.title || post.description,
      objectID: post.slug,
      resource: 'post',
      category: post.type,
      image: post.image,
      keywords: `${post.tags.join(' ')} ${post.description}`,
    });

    return res.status(statusCodes.OK).json({
      status: statusCodes.OK,
      post: { ...post.toObject(), ...body },
      message: responseMessages.updated('Post'),
    });
  }

  /**
   * @author Olivier
   * @param {Object} req
   * @param {Object} res
   * @param {*} next
   * @returns {Object} Returns the response
   */
  static async deletePost(req, res) {
    const { currentUser, post } = req;

    if (!currentUser._id.equals(post.author && post.author._id)) {
      return res.status(statusCodes.UNAUTHORIZED).json({
        status: statusCodes.UNAUTHORIZED,
        post,
        message: responseMessages.unauthorized(),
      });
    }

    await post.updateOne({ status: 'deleted' });

    notifEvents.emit('delete-index', post.slug);

    return res.status(statusCodes.OK).json({
      status: statusCodes.OK,
      post,
      message: responseMessages.deleted('Post'),
    });
  }

  /**
   * @author Olivier
   * @param {Object} req
   * @param {Object} res
   * @param {*} next
   * @returns {Object} Returns the response
   */
  static async getPost(req, res) {
    const { post, currentUser } = req;
    const likedPost = await PostController.checkLikes(currentUser, post)
    return res.status(statusCodes.OK).json({
      status: statusCodes.OK,
      post: likedPost,
    });
  }

  /**
   * @author Olivier
   * @param {Object} req
   * @param {Object} res
   * @param {*} next
   * @returns {Object} Returns the response
   */
  static async getPosts(req, res) {
    const posts = await Post.find({
      status: 'active'
    })
      .select('-__v')
      .populate(
        'author',
        'picture username firstName lastName followerCount followedCount country city',
      );

    return res.status(statusCodes.OK).json({
      status: statusCodes.OK,
      posts,
    });
  }

  /**
   * @author Karl Musingo
   * @param {Object} req
   * @param {Object} res
   * @returns {Object} Returns the response
   */
  static async sharePost(req, res) {
    const { currentUser, post } = req;
    const { plateforme } = req.params;
    if (post) await post.updateOne({ sharesCount: post.sharesCount + 1 });

    const newShare = {
      plateforme,
      user: currentUser._id,
      post: post._id,
    };

    const share = await Share.create(newShare);

    return res.status(statusCodes.OK).json({
      status: statusCodes.OK,
      message: responseMessages.updated('Post'),
      share,
    });
  }

   /**
   * Checks the user
   *
   * @static
   * @author Karl Musingo
   * @param {*} currentUser
   * @param {*} post
   * @returns {object} feed
   */
  static async checkLikes(currentUser, post) {
    if (currentUser) {
      const likes = await Like.find({ user: currentUser._id, post:  post._id })
        .lean()
        .exec();
      if (likes) return { ...post.toObject(), liked: true };
      return post;
    }
    return post;
  }
}
