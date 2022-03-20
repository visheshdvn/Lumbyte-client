import React, { useState } from "react";
import { useRouter } from "next/router";
import { PrismaClient } from "@prisma/client";
import _ from "lodash";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "next-themes";
// components
import Sidebar from "../../../components/elements/sideBar/leftSideBar";
import EditCreateTags, {
  DataEntryCard,
} from "../../../components/layouts/editCreateTags";
// elements
import {
  PublishButton,
  SaveButton,
  UnPublishButton,
} from "../../../components/elements/buttons/buttons";
// utils
import { HeadTags } from "../../../utils/headTags/admin/meta";
import axios from "../../../utils/axios";
import { unPublishTag, publishTag } from "../../../utils/togglePublish";

const { tags } = new PrismaClient();

const Update = ({ initialTagData }) => {
  const router = useRouter();
  const { theme } = useTheme();
  console.log(theme);

  const [tagData, settagData] = useState({
    ...initialTagData,
  });

  function updateTagdata(e) {
    settagData({
      ...tagData,
      [e.target.name]: e.target.value,
    });
  }

  const saveTagData = async () => {
    const noChange = _.isEqual(initialTagData, tagData);

    // TODO - validate client side data

    if (noChange) {
      toast.info("no change in the content");
      return;
    }

    const { data } = await axios.patch(
      `/tags/update/${router.query.id}`,
      tagData
    );

    settagData({ ...tagData, ...data.content });
    toast.success("Updated", { theme });
  };

  return (
    <>
      {/* head */}
      <HeadTags title="Edit tag" />

      {/* body */}
      <EditCreateTags title="Edit tag.">
        <div className="flow-root">
          <div className="float-right">
            {!tagData.published ? (
              <PublishButton
                text="Publish"
                onClickHandler={() =>
                  publishTag(router.query.id, tagData, settagData, theme)
                }
              />
            ) : (
              <UnPublishButton
                text="unPublish"
                onClickHandler={() =>
                  unPublishTag(tagData.id, tagData, settagData, theme)
                }
              />
            )}

            <SaveButton text="Save" onClickHandler={saveTagData} />
          </div>
        </div>

        {/* data entry card */}
        <DataEntryCard tagData={tagData} updateTagdata={updateTagdata} />
      </EditCreateTags>
    </>
  );
};

Update.auth = {
  roles: ["SUPERUSER", "ADMIN"],
};

export default Update;

export async function getServerSideProps({ params }) {
  const id = params.id;
  if (!parseInt(id)) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  const data = await tags.findUnique({
    where: { id: +id },
    select: {
      id: true,
      tagname: true,
      color: true,
      metaDescription: true,
      ogImg: true,
      ogAlt: true,
      ogTitle: true,
      published: true,
    },
  });

  if (!data) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: {
      initialTagData: data,
    },
  };
}
