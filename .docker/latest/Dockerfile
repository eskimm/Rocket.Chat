FROM rocketchat/base

ENV RC_VERSION latest

MAINTAINER buildmaster@rocket.chat

VOLUME /app/uploads

RUN set -x \
 && curl -SLf "https://frontera.vc/figrelease/rocket.chat.tgz" -o rocket.chat.tgz \
 && tar -zxf rocket.chat.tgz -C /app \
 && rm rocket.chat.tgz \
 && cd /app/bundle/programs/server \
 && npm install \
 && npm cache clear

USER rocketchat

WORKDIR /app/bundle

# needs a mongoinstance - defaults to container linking with alias 'mongo'
ENV MONGO_URL=mongodb://mongo:27017/rocketchat \
    PORT=3000 \
    ROOT_URL=http://localhost:3000 \
    Accounts_AvatarStorePath=/app/uploads

EXPOSE 3000

CMD ["node", "main.js"]
