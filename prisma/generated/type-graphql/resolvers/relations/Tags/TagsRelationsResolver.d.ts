import { Blogposts } from "../../../models/Blogposts";
import { Tags } from "../../../models/Tags";
import { TagsBlogpostsArgs } from "./args/TagsBlogpostsArgs";
export declare class TagsRelationsResolver {
    blogposts(tags: Tags, ctx: any, args: TagsBlogpostsArgs): Promise<Blogposts[]>;
}
