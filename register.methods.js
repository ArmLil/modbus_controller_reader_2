//..................................................
// read the reg_len(quantity) registers starting at address addr
// on device with id=device_id
const _readHoldingRegisters = (addr, reg_len, client) => {
  // const _readHoldingRegisters = (addr, reg_len, device_id, client) => {
  // if (device_id !== undefined || device_id !== null) client.setID(device_id);
  console.log(
    "readHoldingRegisters args=>",
    { addr },
    { reg_len }
    // { device_id: client._unitID }
  );
  return client.readHoldingRegisters(addr, reg_len);
};

//....................................................

// const _writeRegisters = (addr, values_arr, device_id, client) => {
//   if (device_id !== undefined || device_id !== null) client.setID(device_id);
//   console.log(
//     "writeRegisters args=>",
//     { addr },
//     { values_arr },
//     { device_id: client._unitID }
//   );
//
//   // example,write the values 0, 0xffff to registers starting at address 5
//   // on device number device_id.
//   return client.writeRegisters(addr, values_arr);
// };
//
// //............................................
// //FC1 "Read Coil Status"
// // this reads 8 registers(true,flase), for empty registers returns false
// const _readCoils = (coil, reg_len, device_id, client) => {
//   if (device_id !== undefined || device_id !== null) client.setID(device_id);
//   console.log(
//     "readCoils args =>",
//     { coil },
//     { reg_len },
//     { device_id: client._unitID }
//   );
//
//   return client.readCoils(coil, reg_len);
// };
//
// //..........................................
// //readInputRegisters(addr, len)
// const _readInputRegisters = (addr, reg_len, device_id, client) => {
//   if (device_id !== undefined || device_id !== null) client.setID(device_id);
//   console.log(
//     "readInputRegisters args=>",
//     { addr },
//     { reg_len },
//     { device_id: client._unitID }
//   );
//
//   return client.readInputRegisters(addr, reg_len);
// };
//
// //..........................................
// //readDiscreteInputs(addr, arg)
// // this reads 8 registers(true,flase), for empty registers returns false
// const _readDiscreteInputs = (addr, args, device_id, client) => {
//   if (device_id !== undefined || device_id !== null) client.setID(device_id);
//   console.log(
//     "readDiscreteInputs args=>",
//     { addr },
//     { args },
//     { device_id: client._unitID }
//   );
//
//   return client.readDiscreteInputs(addr, args);
// };

module.exports = {
  _readHoldingRegisters,
  // _writeRegisters,
  // _readCoils,
  // _readInputRegisters,
  // _readDiscreteInputs,
};
