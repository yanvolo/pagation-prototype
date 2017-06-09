import {Component, OnDestroy, OnInit} from "@angular/core";

import {Posts} from "../../../../both/collections/posts.collection";

import template from './post-list.component.html';
import {Post} from "../../../../both/models/post.model";
import {Observable} from "rxjs/Observable";
import { Subscription } from 'rxjs/Subscription';
import {MeteorObservable} from "meteor-rxjs";

@Component({
    selector: 'post-list',
    template
})
export class PostListComponent implements OnInit, OnDestroy {
    posts: Observable<Post[]>;
    postsSub: Subscription;

    ngOnInit() {
        this.posts = Posts.find({}).zone();
        this.postsSub = MeteorObservable.subscribe('posts').subscribe();
    }

    removePost(post: Post): void {
        Posts.remove(post._id);
    }
    /*
    search(value: string): void {
        this.posts = Posts.find(value ? { location: value } : {}).zone();
    }
    */

    ngOnDestroy() {
        this.postsSub.unsubscribe();

    }
}
