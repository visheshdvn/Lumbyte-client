const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        HOSTNAME: "lumbyte-backend.herokuapp.com",
      },
      images: {
        domains: [
          "localhost",
          "172.29.228.204",
          "i.imgur",
          "i.ibb.co",
          "lumbyte-backend.herokuapp",
        ],
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
