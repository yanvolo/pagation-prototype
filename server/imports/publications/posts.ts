import {Posts} from "../../../both/collections/posts.collection";

Meteor.publish('posts', () => Posts.find());
    //return entire database


/*
//Simply return all posts
function buildQuery(postId?: string): Object {
    return {id:{$exists:true }};
}
*/
