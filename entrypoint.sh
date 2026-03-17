#!/bin/bash
set -e
chown -R openclaw:openclaw /data
if [ ! -d /data/.linuxbrew ]; then
  cp -a /home/linuxbrew/.linuxbrew /data/.linuxbrew
fi
rm -rf /home/linuxbrew/.linuxbrew
ln -sfn /data/.linuxbrew /home/linuxbrew/.linuxbrew
echo "[entrypoint] starting node..."
exec gosu openclaw node --trace-uncaught src/server.js 2>&1
