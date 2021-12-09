import { Blogposts } from "../../../models/Blogposts";
import { Topics } from "../../../models/Topics";
import { TopicsBlogpostsArgs } from "./args/TopicsBlogpostsArgs";
export declare class TopicsRelationsResolver {
    blogposts(topics: Topics, ctx: any, args: TopicsBlogpostsArgs): Promise<Blogposts[]>;
}
