#!/usr/bin/env sh

NAME=${1:-"serverless-project"}

# clone
git clone --depth 1 -- https://github.com/joblocal/serverless-template $NAME

# setup
cd $NAME
yarn install
rm -rf .git
git init .
rm install.sh
git add .
git commit -m 'Birthday'

cat << EOF
No errors? Then everything seems good to go. How do this:

  cd $NAME
  yarn start
EOF
