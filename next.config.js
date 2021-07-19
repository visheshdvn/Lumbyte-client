const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        HOSTNAME: "172.29.135.204:1337",
        PROTOCOL: "http"
        // NEXT_PUBLIC_GA_ID: "G-3BNNCK0DEL",
      },
      images: {
        domains: ["localhost", "i.ibb.co", "lumbyte-backend.herokuapp", "172.29.135.204"],
      },
    }
  }

  return {
    env: {
      HOSTNAME: "lumbyte-backend.herokuapp.com",
      NEXT_PUBLIC_GA_ID: "G-3BNNCK0DEL",
      PROTOCOL: "https"
    },
    images: {
      domains: [
        "localhost",
        "i.imgur",
        "i.ibb.co",
        "lumbyte-backend.herokuapp",
      ],
    },
  }
}
