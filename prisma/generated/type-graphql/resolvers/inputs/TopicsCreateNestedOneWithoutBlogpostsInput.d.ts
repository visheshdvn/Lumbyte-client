import { TopicsCreateOrConnectWithoutBlogpostsInput } from "../inputs/TopicsCreateOrConnectWithoutBlogpostsInput";
import { TopicsCreateWithoutBlogpostsInput } from "../inputs/TopicsCreateWithoutBlogpostsInput";
import { TopicsWhereUniqueInput } from "../inputs/TopicsWhereUniqueInput";
export declare class TopicsCreateNestedOneWithoutBlogpostsInput {
    create?: TopicsCreateWithoutBlogpostsInput | undefined;
    connectOrCreate?: TopicsCreateOrConnectWithoutBlogpostsInput | undefined;
    connect?: TopicsWhereUniqueInput | undefined;
}
