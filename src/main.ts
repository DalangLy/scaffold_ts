import express, {Application} from "express";
import * as http from "http";

const app: Application = express();
const server: http.Server = http.createServer(app);