#!/bin/bash

CURRENT_PATH=`pwd`

PACKAGE_NAME=sysmon-modbus
PACKAGE_PATH=${CURRENT_PATH}/tmp/${PACKAGE_NAME}
SYSMON_PATH=${PACKAGE_PATH}/var/lib/sysmon
modbus_PATH=${SYSMON_PATH}/modbus

mkdir -p ${modbus_PATH}
cp -a ${CURRENT_PATH}/DEB/* ${PACKAGE_PATH}
chmod 755 ${PACKAGE_PATH}/DEBIAN
chmod 755 ${PACKAGE_PATH}/etc
chmod 755 ${PACKAGE_PATH}/var

# ----- NVM Begin
apt-get install -y git
NVM_DIR=${PACKAGE_PATH}/var/lib/sysmon/nvm-modbus
git clone https://github.com/nvm-sh/nvm.git ${NVM_DIR}
cd ${NVM_DIR}
. nvm.sh
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
nvm install v12.13.0
cd ~-
# ----- NVM End

npm i

cp -r ${CURRENT_PATH}/node_modules/ \
      ${CURRENT_PATH}/controller.config.js \
      ${CURRENT_PATH}/index.js \
      ${CURRENT_PATH}/package.json \
      ${CURRENT_PATH}/register.methods.js \
      ${modbus_PATH}

chmod 755 ${PACKAGE_PATH}/DEBIAN/postinst ${PACKAGE_PATH}/DEBIAN/postrm ${PACKAGE_PATH}/DEBIAN/prerm
find ${PACKAGE_PATH}/ -name '.DS_Store' -exec rm -rf {} \;


cd ${CURRENT_PATH}/tmp/
dpkg-deb --build ${PACKAGE_NAME}

VERSION_DEBFILE=$(awk '/^Version:/ { print $2 }' ./${PACKAGE_NAME}/DEBIAN/control)
mv ${PACKAGE_NAME}.deb ${CURRENT_PATH}/${PACKAGE_NAME}-${VERSION_DEBFILE}.deb

rm -rf  ${PACKAGE_PATH}
