"use strict";

module.exports.handler = async (event, ctx, done) => {
  done(null, {
    statusCode: 200,
    body: JSON.stringify({
      data: {
        id: 1,
        name: "clean up",
        status: "open",
      },
    }),
  });
};
