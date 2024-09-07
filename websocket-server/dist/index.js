"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});
const users = {};
io.on("connection", (socket) => {
    console.log("yess");
    const { userId } = socket.handshake.query;
    if (userId) {
        // Associate userId with the current socket ID
        users[userId] = socket.id;
        console.log(`User ${userId} connected with socket ID: ${socket.id}`);
    }
    socket.on("join_room", (data, userId) => {
        socket.join(data);
        console.log("joined");
    });
    socket.on("reconnect", (data) => {
        socket.join(data);
        console.log("rejoined");
    });
    socket.on("send_msg", (data) => {
        console.log("data = ", data.message, data.room);
        socket.to(data.room).emit("receive_msg", data);
    });
});
server.listen(3000, () => {
    console.log("listening 3000");
});
