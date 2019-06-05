# nuxt_firebase

## 開発環境
### 初回立ち上げ
```
# OSXにて
$ git clone git@github.com:prgyukke/nuxt_firebase.git
$ cd nuxt_firebase/
$ docker-compose up -d --build

# appコンテナに入る
$ docker-compose exec app /bin/bash
# npm install -g firebase-tools jest
# npm install
```

### 2回目以降の立ち上げ
```
$ docker-compose up -d
```

### appコンテナ(node v8.11.2)に入る
```
$ docker-compose exec app /bin/bash
```

### ビルトインサーバ立ち上げ(localhost:8080)
```
# npm run dev
```

### プロダクション用のビルド
```
# npm run build
```

### jestを使用したテスト
```
# jest
```

### appコンテナから抜ける
```
# appコンテナ上にて
# exit
```

### Firebase にホスティング
```
$ npm run build
$ npm install -g firebase-tools
$ firebase login
# ブラウザにてログイン
$ firebase deploy
```