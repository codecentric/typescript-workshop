import {createPost, getAllPosts} from '../api/post.js';

export const createNewPost = async (postFormData, userId) => {
    const allExistingPosts = await getAllPosts()

    const titleAlreadyExists = !!allExistingPosts.find(existingPost => existingPost.title === postFormData.title)

    if (titleAlreadyExists) {
        throw new Error('Title already exists')
    }

    const post = {
        title: postFormData.title,
        body: postFormData.body,
        userId: userId,
    }

    return createPost(post)
}