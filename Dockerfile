FROM node:22-slim

WORKDIR /usr/src/app
ADD . .

ENV COREPACK_INTEGRITY_KEYS="0"
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable pnpm
RUN corepack use pnpm@10.x
