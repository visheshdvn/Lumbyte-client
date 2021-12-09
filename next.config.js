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
        domains: ["localhost", "i.ibb.co", "172.26.188.242"],
      },
      reactStrictMode: true,
      webpack: function (config, options) {
        config.experiments = { topLevelAwait: true };
        return config;
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
