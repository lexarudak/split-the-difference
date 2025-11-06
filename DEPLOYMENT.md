# GitHub Secrets Setup Instructions

Чтобы настроить деплой с переменными окружения, нужно добавить secrets в GitHub репозиторий:

## Как добавить secrets:

1. Идите в ваш GitHub репозиторий: https://github.com/lexarudak/split-the-difference
2. Settings → Secrets and variables → Actions
3. Нажмите "New repository secret" и добавьте следующие секреты:

## Secrets для добавления:

Скопируйте значения из вашего .env файла:

```
VITE_FIREBASE_API_KEY = AIzaSyC9D9u-HLij2ardxa7WjU-iqFhkh7klw_I
VITE_FIREBASE_AUTH_DOMAIN = split-the-difference-2025.firebaseapp.com
VITE_FIREBASE_PROJECT_ID = split-the-difference-2025
VITE_FIREBASE_STORAGE_BUCKET = split-the-difference-2025.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID = 883847880291
VITE_FIREBASE_APP_ID = 1:883847880291:web:1884f748230cff33a3e256
VITE_FIREBASE_MEASUREMENT_ID = G-9YLF5XWCL7
```

## После добавления secrets:

1. Закоммитьте и запушьте изменения в main ветку
2. GitHub Actions автоматически запустит деплой с правильными переменными окружения
3. Сайт будет пересобран с корректной Firebase конфигурацией

## Проверка:

После деплоя откройте DevTools на https://split-the-difference-2025.web.app/ и проверьте, что Firebase конфигурация больше не содержит undefined значений.