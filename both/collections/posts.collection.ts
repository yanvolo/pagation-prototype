import Collection = Mongo.Collection;
import {MongoObservable} from "meteor-rxjs";
import {Post} from "../models/post.model";

export const Posts = new MongoObservable.Collection<Post>('posts');