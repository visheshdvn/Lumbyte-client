const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        HOSTNAME: "172.21.78.205:1337",
      },
      images: {
        domains: ["localhost", "i.ibb.co", "lumbyte-backend.herokuapp"],
      },
    }
  }

  return {
    env: {
      HOSTNAME: "lumbyte-backend.herokuapp.com",
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
