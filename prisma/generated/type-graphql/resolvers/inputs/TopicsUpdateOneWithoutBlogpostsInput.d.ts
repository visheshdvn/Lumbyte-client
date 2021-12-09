import { TopicsCreateOrConnectWithoutBlogpostsInput } from "../inputs/TopicsCreateOrConnectWithoutBlogpostsInput";
import { TopicsCreateWithoutBlogpostsInput } from "../inputs/TopicsCreateWithoutBlogpostsInput";
import { TopicsUpdateWithoutBlogpostsInput } from "../inputs/TopicsUpdateWithoutBlogpostsInput";
import { TopicsUpsertWithoutBlogpostsInput } from "../inputs/TopicsUpsertWithoutBlogpostsInput";
import { TopicsWhereUniqueInput } from "../inputs/TopicsWhereUniqueInput";
export declare class TopicsUpdateOneWithoutBlogpostsInput {
    create?: TopicsCreateWithoutBlogpostsInput | undefined;
    connectOrCreate?: TopicsCreateOrConnectWithoutBlogpostsInput | undefined;
    upsert?: TopicsUpsertWithoutBlogpostsInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: TopicsWhereUniqueInput | undefined;
    update?: TopicsUpdateWithoutBlogpostsInput | undefined;
}
