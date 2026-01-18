# Backend Structure (Firebase)

## Firestore Database

### Collections

#### `rooms`
Коллекция комнат для совместных расчётов.

**Структура документа:**
```typescript
{
  id: string;           // Auto-generated document ID
  userId: string;       // ID владельца комнаты (Firebase Auth UID)
  isActive: boolean;    // Активна ли комната
}
```

**Индексы:**
- `userId` - для быстрого поиска комнат пользователя

---

## API Layer

### `/src/api/rooms.ts`
Функции для работы с комнатами:

- `getRoomsByUserId(userId: string): Promise<Room[]>` - получить все комнаты пользователя

---

## React Query Hooks

### `/src/hooks/useUserRooms.ts`
- `useUserRooms()` - хук для получения комнат текущего пользователя
  - Query Key: `['rooms', userId]`
  - Enabled только когда пользователь авторизован

---

## Environment Setup

### Firebase Config
Конфигурация находится в `/src/lib/firebase.ts`

**Экспорты:**
- `auth` - Firebase Authentication
- `db` - Firestore Database
- `analytics` - Firebase Analytics
- `googleProvider` - Google OAuth Provider

