import { Blogposts } from "../models/Blogposts";
import { TagsCount } from "../resolvers/outputs/TagsCount";
export declare class Tags {
    id: number;
    tagname: string;
    color?: string | null;
    metaDescription?: string | null;
    ogimg?: string | null;
    ogalt?: string | null;
    blogposts?: Blogposts[];
    created_at: Date;
    upadted_at: Date;
    published_at?: Date | null;
    published: boolean;
    _count?: TagsCount | null;
}
