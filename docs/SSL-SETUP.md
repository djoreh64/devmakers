# SSL Setup для test.devmakers.dev

## ✅ Что уже сделано

1. ✅ Создана конфигурация Nginx для test.devmakers.dev
2. ✅ Настроен проксирование на порт 5001 (Docker контейнер)
3. ✅ Временно использует SSL сертификат от devmakers.dev
4. ✅ Настроен автоматический редирект с HTTP на HTTPS

## 📍 Текущее состояние

**Nginx конфигурация:** `/etc/nginx/sites-available/test.devmakers.dev`
**Статус:** Активна и работает
**Порт:** 5001 (проксирование)
**SSL:** Временно использует сертификат devmakers.dev

## 🔧 Что нужно сделать для полноценного SSL

### 1. Настройте DNS запись

В панели управления доменом (например, Timeweb, Cloudflare) добавьте A-запись:

```
Тип: A
Имя: test
Значение: 72.56.76.216
TTL: 3600 (или Auto)
```

Полная запись должна выглядеть так:
```
test.devmakers.dev → 72.56.76.216
```

### 2. Проверьте DNS (после настройки)

Подождите 5-10 минут для распространения DNS, затем проверьте:

```bash
# Проверка DNS
dig test.devmakers.dev +short
# Должен вернуть: 72.56.76.216

# Или через nslookup
nslookup test.devmakers.dev
```

### 3. Получите SSL сертификат

После того как DNS настроен и распространился, выполните:

```bash
# Расширение существующего сертификата
certbot --nginx --cert-name devmakers.dev \
  -d devmakers.dev \
  -d www.devmakers.dev \
  -d api.devmakers.dev \
  -d test.devmakers.dev \
  --expand --non-interactive --agree-tos
```

Или создайте отдельный сертификат:

```bash
# Отдельный сертификат для test.devmakers.dev
certbot --nginx -d test.devmakers.dev \
  --non-interactive --agree-tos --email info@devmakers.dev
```

### 4. Проверьте результат

```bash
# Проверка сертификатов
certbot certificates

# Проверка конфигурации nginx
nginx -t

# Перезагрузка nginx
systemctl reload nginx

# Проверка доступности
curl -I https://test.devmakers.dev
```

## 🌐 Доступ к сайту

После настройки DNS и SSL:

- **HTTPS:** https://test.devmakers.dev
- **HTTP:** автоматический редирект на HTTPS
- **Локально:** http://localhost:5001

## 🔍 Проверка текущей конфигурации

### Просмотр конфигурации Nginx

```bash
cat /etc/nginx/sites-available/test.devmakers.dev
```

### Проверка статуса

```bash
# Статус nginx
systemctl status nginx

# Активные конфигурации
ls -la /etc/nginx/sites-enabled/

# Проверка портов
ss -tlnp | grep 5001
```

### Проверка Docker контейнера

```bash
# Статус контейнера
docker ps | grep frontend-test

# Логи
docker logs devmakers-frontend-test -f

# Статус через docker-compose
cd /var/www/frontend-test
docker-compose ps
```

## 🔄 Автоматическое обновление SSL

Certbot автоматически настраивает обновление сертификатов через systemd timer:

```bash
# Проверка таймера
systemctl status certbot.timer

# Тест обновления (без фактического обновления)
certbot renew --dry-run
```

## 📝 Конфигурация Nginx (текущая)

```nginx
server {
    server_name test.devmakers.dev;

    location / {
        proxy_pass http://localhost:5001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        proxy_connect_timeout 600;
        proxy_send_timeout 600;
        proxy_read_timeout 600;
    }

    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/devmakers.dev/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/devmakers.dev/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}

server {
    listen 80;
    server_name test.devmakers.dev;
    return 301 https://$host$request_uri;
}
```

## 🔐 Безопасность

1. **SSL сертификат:** Let's Encrypt (бесплатный, автообновляемый)
2. **Протокол:** TLS 1.2+
3. **Автоматический редирект:** HTTP → HTTPS
4. **Заголовки безопасности:** Настроены через proxy_set_header

## ⚠️ Важные заметки

1. **Временный SSL:** Сейчас используется сертификат от devmakers.dev. Браузер может показывать предупреждение о несоответствии имени, пока не настроен DNS и не получен правильный сертификат.

2. **DNS распространение:** После настройки DNS записи может потребоваться до 24 часов для полного распространения (обычно 5-10 минут).

3. **Проверка перед certbot:** Убедитесь, что test.devmakers.dev резолвится в правильный IP перед запуском certbot.

## 🆘 Troubleshooting

### SSL Warning в браузере

**Причина:** DNS еще не настроен или сертификат не получен
**Решение:** Настройте DNS и получите сертификат (шаги выше)

### Certbot ошибка "unauthorized"

**Причина:** DNS не указывает на этот сервер
**Проверка:**
```bash
dig test.devmakers.dev +short
# Должен вернуть: 72.56.76.216
```

### Nginx не перезагружается

```bash
# Проверка синтаксиса
nginx -t

# Просмотр логов
journalctl -u nginx -n 50

# Принудительный перезапуск
systemctl restart nginx
```

### Контейнер недоступен

```bash
# Проверка работы контейнера
docker ps | grep frontend-test

# Проверка портов
ss -tlnp | grep 5001

# Проверка логов контейнера
docker logs devmakers-frontend-test --tail=100
```

## 📞 Следующие шаги

1. ⏳ **Настройте DNS** (в панели управления доменом)
2. ⏳ **Подождите распространения DNS** (5-10 минут)
3. ⏳ **Получите SSL сертификат** (команда certbot выше)
4. ✅ **Готово!** test.devmakers.dev будет доступен по HTTPS

## 🔗 Полезные ссылки

- [Let's Encrypt Documentation](https://letsencrypt.org/docs/)
- [Certbot Documentation](https://certbot.eff.org/docs/)
- [Nginx Proxy Configuration](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/)

