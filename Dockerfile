FROM node:12

ENV HOME /ECMAScript-LeetCode

WORKDIR ${HOME}
ADD . $HOME

RUN yarn cache clean
RUN yarn install
