import {loadSamplePosts} from "../fixtures/posts";
import '../publications/posts';

export class Main {
  //This weird structure is just an artifiact of the demo project. Feel free to refractor it to make it better.
  start(): void {
    this.initFakeData();
  }

  initFakeData(): void {
    loadSamplePosts();
  }
}
