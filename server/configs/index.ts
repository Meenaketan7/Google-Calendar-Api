import { PrismaClient } from "@prisma/client";
import { config } from "dotenv";
const prisma = new PrismaClient();
config();

const configs = {
  PORT: process.env.PORT,
  API_VERSION: `api/v1`,
  HOST: `${process.env.HOST}`,
  USER_PASSWORD: `${process.env.USER_PASSWORD}`,
  JWT_SECRET: `${process.env.JWT_SECRET}`,
  MAIL_USER: `${process.env.MAIL_USER}`,
  MAIL_PASS: `${process.env.MAIL_PASS}`,
};

export { configs, prisma };
