
const isProduction = process.env.NODE_ENV === "production";

export default () => ({
    // port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      url: isProduction ? process.env.DATABASE_URL
        : `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASS}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DATABASE}`
    },
    bucket: {
      region: process.env.IMAGE_S3_REGION,
      spaces: process.env.SPACES,
      accesskeyid: process.env.IMAGE_S3_KEY_ID,
      secretacceskey: process.env.IMAGE_S3_ACCESS_KEY
    },
    mail: {
      from: {
        name: process.env.MAIL_FROM_NAME,
        email: process.env.MAIL_FROM_EMAIL,
      },
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      username: process.env.MAIL_USERNAME,
      password: process.env.MAIL_PASSWORD,
    } 
  }
);
 