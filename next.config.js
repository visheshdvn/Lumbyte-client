const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        HOSTNAME: "localhost:1337",
        PROTOCOL: "http",
        // NEXT_PUBLIC_GA_ID: "G-3BNNCK0DEL",
      },
      images: {
        domains: [
          "localhost",
          "i.ibb.co",
          "172.26.188.242",
          "lumbytesblog.s3.eu-west-1.amazonaws.com",
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
      domains: ["i.ibb.co", "admin.lumbytes.com"],
    },
  };
};
