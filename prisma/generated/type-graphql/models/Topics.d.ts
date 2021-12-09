import { Blogposts } from "../models/Blogposts";
import { TopicsCount } from "../resolvers/outputs/TopicsCount";
export declare class Topics {
    id: number;
    topicname?: string | null;
    metaDescription?: string | null;
    ogimg?: string | null;
    ogalt?: string | null;
    blogposts?: Blogposts[];
    created_at: Date;
    upadted_at: Date;
    published_at?: Date | null;
    published: boolean;
    _count?: TopicsCount | null;
}
