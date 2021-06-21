module.exports = {
  clientId: 247,
  // headerHost: "127.0.0.1",
  headerHost: "172.28.1.88",
  headerPort: "3002",
  controllerId: 1,
  // controllerPort: "/dev/tnt1",
  controllerPort: "/dev/ttyS0",
  modbusOptions: {
    baudRate: 9600,
    parity: "odd",
    dataBits: 8,
    stopBits: 1,
  },
  interval: 5000, // 5 sec

  registers: [
    //test registers
    // {
    //   address: 5,
    //   leng: 1,
    // },
    // {
    //   address: 6,
    //   leng: 1,
    // },
    //состояние насоса
    {
      address: 0x1600,
      leng: 2,
      type: "Unsigned int",
    },
    {
      address: 0x1602,
      leng: 2,
      type: "Float",
    },
    {
      address: 0x1604,
      leng: 2,
      type: "Float",
    },
  ],
};
