import {createPost, getAllPosts, updatePost} from '../api/post.js';

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

export const updateExistingPost = async (postFormData, userId) =>
    updatePost(postFormData.id, postFormData.title, postFormData.body, userId)