FROM node:4-onbuild
EXPOSE 3000
RUN npm install
CMD npm start