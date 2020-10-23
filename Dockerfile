FROM node:14

ENV HOME /ECMAScript-LeetCode

WORKDIR ${HOME}
ADD . $HOME

RUN yarn install
