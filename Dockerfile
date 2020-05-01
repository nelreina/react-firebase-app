FROM nginx:alpine

# This is the setting that you need if the path is diff the root
# COPY default.conf /etc/nginx/conf.d/default.conf
# COPY ./build /usr/share/nginx/html/location

COPY ./build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx","-g","daemon off;"]