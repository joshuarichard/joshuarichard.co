#!/bin/bash

set -euo pipefail
cd "$(dirname "$0")/.."

NODE_VERSION='12.14.1'
export NVM_DIR="$HOME/.nvm"
source "$NVM_DIR/nvm.sh"
nvm use --silent $NODE_VERSION
NODE_PATH=$(which node)
export NODE_PATH=$NODE_PATH

yarn

yarn build