const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        HOSTNAME: "admin.lumbytes.com",
        PROTOCOL: "https",
        // NEXT_PUBLIC_GA_ID: "G-3BNNCK0DEL",
      },
      images: {
        domains: [
          "localhost",
          "admin.lumbytes.com",
          "lumbytesblog-content-development.s3.eu-west-1.amazonaws.com",
          "lumbytesblog-banners-development.s3.eu-west-1.amazonaws.com",
        ],
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
      domains: [
        "admin.lumbytes.com",
        "lumbytesblog-banners.s3.eu-west-1.amazonaws.com",
        "lumbytesblog-content.s3.eu-west-1.amazonaws.com",
        "lumbytesblog-content-development.s3.eu-west-1.amazonaws.com",
        "lumbytesblog-banners-development.s3.eu-west-1.amazonaws.com",
      ],
    },
  };
};
