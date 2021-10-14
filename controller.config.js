module.exports = {
  clientId: 247,
  headerHost: "127.0.0.1",
  // headerHost: "172.28.1.88",
  headerPort: "3002",
  controllerId: "5.1",
  // controllerPort: "/dev/tnt1",
  controllerPort: "/dev/ttyS0",
  modbusOptions: {
    baudRate: 9600,
    parity: "odd",
    dataBits: 8,
    stopBits: 1,
  },
  interval: 3000, // 3 sec
  // interval: 10000, // 10 sec

  registers: [
    {
      name: "revs",
      address: 0x1600,
      leng: 2,
      type: "Unsigned int",
    },
    {
      name: "p_in",
      address: 0x1602,
      leng: 2,
      type: "Float",
    },
    {
      name: "p_out",
      address: 0x1604,
      leng: 2,
      type: "Float",
    },
  ],
};
