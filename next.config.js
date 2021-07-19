const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        HOSTNAME: "172.26.180.72:1337",
        PROTOCOL: "http",
        // NEXT_PUBLIC_GA_ID: "G-3BNNCK0DEL",
      },
      images: {
        domains: [
          "localhost",
          "i.ibb.co",
          "lumbyte-backend.herokuapp",
          "172.26.180.72",
        ],
      },
    }
  }

  return {
    env: {
      HOSTNAME: "admin.lumbytes.com",
      PROTOCOL: "https",
      NEXT_PUBLIC_GA_ID: "G-3BNNCK0DEL",
    },
    images: {
      domains: [
        "localhost",
        "i.imgur",
        "i.ibb.co",
        "admin.lumbytes.com",
      ],
    },
  }
}
