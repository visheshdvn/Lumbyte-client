const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        HOSTNAME: "localhost:1337",
        PROTOCOL: "http",
        // NEXT_PUBLIC_GA_ID: "G-3BNNCK0DEL",
        AWS_SECRET_ACCESS_KEY: "VE9z+834sYZnzjzYBzJ48NovpufoWUoThlhYG/5k",
        AWS_ACCESS_KEY_ID: "AKIAROJ2IL4J2ONMWONC",
        AWS_REGION: "eu-west-1",
        AWS_S3_BUCKET: "lumbytesblog",
      },
      images: {
        domains: ["localhost", "i.ibb.co", "172.26.188.242"],
      },
    };
  }

  return {
    env: {
      HOSTNAME: "admin.lumbytes.com",
      PROTOCOL: "https",
      NEXT_PUBLIC_GA_ID: "G-3BNNCK0DEL",
    },
    images: {
      domains: ["i.ibb.co", "admin.lumbytes.com"],
    },
  };
};
