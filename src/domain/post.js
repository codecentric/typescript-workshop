import {createPost, getAllPosts} from '../api/post.js';

export const createNewPost = async (post) => {
    const allExistingPosts = await getAllPosts()

    const titleAlreadyExists = !!allExistingPosts.find(existingPost => existingPost.title === post.title)

    if (titleAlreadyExists) {
        throw new Error('Title already exists')
    }

    return createPost(post)
}