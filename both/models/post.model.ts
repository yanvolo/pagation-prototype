//Import a bunch of enumerated types
import {ProjectType} from "./projecttype.model";
import {ProjectStatus} from "./projectstatus.model";
import {ProjectPriority} from "./projectpriority.model";
import {CollectionObject} from "./collection-object.model";

export interface Post extends CollectionObject{
    id:number,
    project:string, //ie. project title
    type: ProjectType,
    status: ProjectStatus,
    priority: ProjectPriority,
    subject: string,
    updated: Date,
    made: Date

}

