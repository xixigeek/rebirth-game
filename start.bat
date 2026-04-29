@echo off
chcp 65001 >nul
echo ==========================================
echo   重生之我在xxx做xxx - 文字冒险游戏
echo ==========================================
echo.
echo 正在启动游戏...
echo.

REM 检查是否安装了 Python
where python >nul 2>&1
if %errorlevel% equ 0 (
    echo 使用 Python 启动本地服务器...
    echo 游戏将在浏览器中打开: http://localhost:8080
    echo.
    echo 按 Ctrl+C 停止服务器
    echo.
    
    REM 在后台打开浏览器
    start http://localhost:8080
    
    REM 启动服务器
    python -m http.server 8080
) else (
    echo 错误: 未找到 Python
    echo.
    echo 请手动打开 index.html 文件开始游戏
    echo 或者安装 Python 后再次运行此脚本
    pause
)
