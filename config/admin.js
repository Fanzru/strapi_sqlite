module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bf9b25b9ba4f4da96dbc7ab0a392abb7'),
  },
});
