npm run build
docker rm app -f
docker build -t app .
docker run  --name app -d -p 8081:80 app 

