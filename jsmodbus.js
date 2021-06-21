// create a tcp modbus client
const modbus = require("jsmodbus");
const SerialPort = require("serialport");
const options = {
  baudRate: 9600
};
const socket = new SerialPort("/dev/tnt0", options);
const server = new modbus.server.RTU(socket);
server.on("connect", function(client) {
  console.log("client");
  console.log(client);
});

server.on("readCoils", function(request, response, send) {
  /* Implement your own */
  console.log("reading coils");
  response.body.coils[0] = true;
  response.body.coils[1] = false;

  send(response);
});

server.on("readHoldingRegisters", function(request, response, send) {
  /* Implement your own */
  console.log("reading holding registers");
  // response.body creating holding registers

  send(response);
});
