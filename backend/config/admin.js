module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '41bacf5cc5aec99dfbcef915f4d1120a'),
  },
});
