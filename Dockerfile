FROM node:10

ENV HOME /ECMAScript-LeetCode

WORKDIR ${HOME}
ADD . $HOME

RUN yarn install
