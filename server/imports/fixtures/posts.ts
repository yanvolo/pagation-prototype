//The actuall posts
import { Post } from '../../../both/models/post.model';
import {Posts} from "../../../both/collections/posts.collection";

//Enemureted Types neccessary for posts
import {ProjectType} from "../../../both/models/projecttype.model";
import {ProjectStatus} from "../../../both/models/projectstatus.model";
import {ProjectPriority} from "../../../both/models/projectpriority.model";

export function loadSamplePosts() {
    //Check if collection is empty, if it is, load the sample data
    if(Posts.find().cursor.count() === 0){
        //Push some reasonable examples
        const coherentExamples: Post[] = [
            {
                id:11.,
                project:"SciDap",
                type: ProjectType.bug,
                status: ProjectStatus.open,
                priority: ProjectPriority.high,
                subject: Fake.sentence(5),
                updated: new Date(2017, 24, 3),
                made: new Date(2016, 13, 2)
            },
            {
                id:7.,
                project:"CCHMC",
                type: ProjectType.feature,
                status: ProjectStatus.open,
                priority: ProjectPriority.high,
                subject: Fake.sentence(5),
                updated: new Date(2017, 5, 3),
                made: new Date(2016, 13, 3)
            },
            {
                id:3.,
                project:"SciDap Satellite",
                type: ProjectType.feature,
                status: ProjectStatus.open,
                priority: ProjectPriority.high,
                subject: Fake.sentence(5),
                updated: new Date(2017, 2, 3),
                made: new Date(2016, 4, 5)
            },
            {
                id:1.,
                project:"Personal Projects",
                type: ProjectType.feature,
                status: ProjectStatus.close,
                priority: ProjectPriority.low,
                subject: Fake.sentence(5),
                updated: new Date(2017, 0, 1),
                made: new Date(2016, 13, 4)
            }
        ];
        coherentExamples.forEach((post: Post) => Posts.insert(post))

        //Then make the rest of the examples completely random
        for (var i = 0; i < 496; i++) {
            Posts.insert({
                id:Math.ceil(Math.random()*500),
                project:Fake.sentence(2), //ie. project title
                type: Math.floor(Math.random()*2),
                status: Math.floor(Math.random()*2),
                priority: Math.floor(Math.random()*2),
                subject: Fake.sentence(5),
                updated: randomDate(new Date(2016, 0, 1), new Date()),
                made: randomDate(new Date(2016, 0, 1), new Date())
            });
        }

    }
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

//Post structure placed for reference
/*

export interface Post{
    id:number,
    project:string, //ie. project title
    type: ProjectType,
    status: Status,
    priority: Priority,
    subject: string,
    updated: Date,
    made: Date
}

*/