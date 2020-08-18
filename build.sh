#!/bin/bash
echo "\033[31m 打包代码 \033[0m"
npm run prod
echo "\033[31m 开始构建镜像 \033[0m"
docker build --no-cache -t node-mvc .
echo "\033[31m 停止并删除旧容器 \033[0m"
docker stop  node-mvc-container
docker rm  node-mvc-container
echo "\033[31m 判断有没有TAG为<none>的镜像，有就删除 \033[0m"
isNone=$(docker image ls | grep "<none>")
if [ -n "$isNone" ]; then
    echo "$isNone"
    docker image ls | grep "<none>" | awk '{print $3}' | xargs docker rmi
fi
echo "\033[31m 启动新容器 \033[0m"
docker container run -p 8088:3000 -d --name node-mvc-container node-mvc

