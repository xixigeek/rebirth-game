#!/bin/bash

echo "=========================================="
echo "  重生之我在xxx做xxx - 文字冒险游戏"
echo "=========================================="
echo ""
echo "正在启动游戏..."
echo ""

# 检查是否安装了 Python3
if command -v python3 &> /dev/null; then
    echo "使用 Python3 启动本地服务器..."
    echo "游戏将在浏览器中打开: http://localhost:8080"
    echo ""
    echo "按 Ctrl+C 停止服务器"
    echo ""
    
    # 在后台打开浏览器
    sleep 2 && open http://localhost:8080 2>/dev/null || xdg-open http://localhost:8080 2>/dev/null || start http://localhost:8080 2>/dev/null &
    
    # 启动服务器
    python3 -m http.server 8080
else
    echo "错误: 未找到 Python3"
    echo ""
    echo "请手动打开 index.html 文件开始游戏"
    echo "或者安装 Python3 后再次运行此脚本"
fi
