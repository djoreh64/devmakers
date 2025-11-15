#!/bin/bash

set -e

echo "🚀 Начинаю деплой frontend-test на test.devmakers.dev..."
echo ""

# ============================================
# ПОЛНОЕ УДАЛЕНИЕ ВСЕХ СТАРЫХ КОНТЕЙНЕРОВ
# ============================================
echo "🛑 Остановка и ПОЛНОЕ УДАЛЕНИЕ всех старых контейнеров..."
echo ""

# 1. Останавливаем все контейнеры через docker-compose
echo "   Остановка контейнеров через docker-compose..."
docker-compose down 2>/dev/null || true

# 2. Принудительно останавливаем все контейнеры проекта
docker-compose stop 2>/dev/null || true

# 3. Удаляем контейнеры по точным именам
echo "   Удаление контейнеров по именам..."
docker rm -f devmakers-frontend-test 2>/dev/null || echo "   ✓ devmakers-frontend-test не найден"
docker rm -f frontend-test-frontend-test-1 2>/dev/null || echo "   ✓ frontend-test-frontend-test-1 не найден"
docker rm -f frontend-test_frontend-test_1 2>/dev/null || echo "   ✓ frontend-test_frontend-test_1 не найден"

# 4. Ищем и удаляем ВСЕ контейнеры с "frontend-test" в имени
echo "   Поиск и удаление всех контейнеров с 'frontend-test' в имени..."
CONTAINERS=$(docker ps -a --filter "name=frontend-test" -q)
if [ ! -z "$CONTAINERS" ]; then
    echo "   Найдены контейнеры: $CONTAINERS"
    docker rm -f $CONTAINERS
    echo "   ✓ Все контейнеры с 'frontend-test' удалены"
else
    echo "   ✓ Дополнительных контейнеров не найдено"
fi

# 5. Полное удаление через docker-compose с очисткой volumes
echo "   Финальная очистка через docker-compose..."
docker-compose rm -f -s -v 2>/dev/null || true

echo ""

# ============================================
# УДАЛЕНИЕ СТАРЫХ ОБРАЗОВ
# ============================================
echo "🗑️  Удаление старых Docker образов..."

# Удаляем образы по имени
docker rmi frontend-test_frontend-test 2>/dev/null || echo "   ✓ Образ frontend-test_frontend-test не найден"
docker rmi frontend-test-frontend-test 2>/dev/null || echo "   ✓ Образ frontend-test-frontend-test не найден"

# Удаляем все образы с тегом
IMAGES=$(docker images -q frontend-test_frontend-test 2>/dev/null)
if [ ! -z "$IMAGES" ]; then
    echo "   Удаление образов: $IMAGES"
    docker rmi -f $IMAGES 2>/dev/null || true
fi

# Удаляем dangling образы (без тега)
echo "   Очистка dangling образов..."
docker image prune -f 2>/dev/null || true

echo ""

# ============================================
# ОЧИСТКА СЕТЕЙ
# ============================================
echo "🌐 Очистка Docker сетей..."
docker network rm frontend-test_default 2>/dev/null || echo "   ✓ Сеть frontend-test_default не найдена"
docker network rm frontend-test-nextjs_default 2>/dev/null || echo "   ✓ Сеть frontend-test-nextjs_default не найдена"

echo ""
echo "✅ Все старые контейнеры, образы и сети успешно удалены!"
echo ""

# ============================================
# ПЕРЕСБОРКА И ЗАПУСК
# ============================================
echo "🔨 Пересборка Docker образа..."
docker-compose build --no-cache
echo ""

echo "🚀 Запуск нового контейнера..."
docker-compose up -d
echo ""

# Ожидание запуска
echo "⏳ Ожидание запуска сервиса..."
sleep 10

# ============================================
# ПРОВЕРКА СТАТУСА
# ============================================
echo "🔍 Проверка статуса контейнера..."
if docker ps | grep -q "devmakers-frontend-test"; then
    echo ""
    echo "✅ Frontend-test успешно развёрнут на test.devmakers.dev!"
    echo ""
    echo "📍 Production URL:"
    echo "   https://test.devmakers.dev"
    echo "   http://localhost:5001"
    echo ""
    echo "🔍 Команды для проверки:"
    echo "   docker-compose ps"
    echo "   docker-compose logs -f"
    echo "   docker ps | grep frontend-test"
    echo ""
    
    # Показываем информацию о контейнере
    echo "📊 Информация о контейнере:"
    docker ps --filter "name=devmakers-frontend-test" --format "   ID: {{.ID}} | Status: {{.Status}} | Ports: {{.Ports}}"
    echo ""
else
    echo ""
    echo "❌ ОШИБКА: Контейнер не запустился!"
    echo ""
    echo "Проверьте логи:"
    echo "   docker-compose logs"
    echo "   docker ps -a | grep frontend-test"
    exit 1
fi

# ============================================
# ТЕСТ ДОСТУПНОСТИ
# ============================================
echo "🧪 Тестирование доступности эндпоинта..."
sleep 3

if curl -f -s http://localhost:5001 > /dev/null; then
    echo "✅ Frontend-test отвечает на порту 5001"
else
    echo "⚠️  Frontend-test не отвечает на порту 5001"
    echo "   Проверьте логи: docker-compose logs -f"
fi

echo ""
echo "🎉 Деплой завершён!"
echo ""

