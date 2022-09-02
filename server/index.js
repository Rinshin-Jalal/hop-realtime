import { Hop } from "@onehop/js";
import dotenv from "dotenv";
dotenv.config();

const myToken =
  process.env.PROJECT_TOKEN ||
  "ptk_c181MmYyMTlkODFhMzdjOWE1NDZjYjVlZWMyNjBmNDBjYV80OTkxODUyMzU1ODY3NDcyOA";
// Export the Hop SDK instance so you can use it throughout your codebase

export const hop = new Hop(myToken);

// hop.projects.secrets.create(
//   "RANDOM_NUMBER",
//   Math.floor(Math.random() * 100).toString()
// );
const channel = await hop.channels.create(
  "unprotected",
  "12dmiad"
  // Creation Options
);
// import { hop } from "./hop-conf.js";

// const channel = await hop.channels.create(
//   "unprotected",
//   "12dmiad"
//   // Creation Options
// );

// console.log(channel);
