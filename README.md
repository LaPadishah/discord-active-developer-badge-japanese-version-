# discord-active-developer-badge-japanese-version
# 🇯🇵 Discord アクティブデベロッパーバッジ取得用ボット  

このリポジトリは、日本語ユーザー向けの **Discord Active Developer Badge** を取得するためのシンプルな Discord ボットです。  
ボットをサーバーに導入し、スラッシュコマンド `/ping` を実行することで、数日後に Discord 上でバッジを申請できるようになります。  

---

## 🚀 セットアップ手順

### 1. このリポジトリを Replit にインポート
- [Replit](https://replit.com/) にログインします。  
- 「Import from GitHub」を選び、このリポジトリのURLを入力してください。  

---

### 2. Discord でアプリを作成
1. [Discord Developer Portal](https://discord.com/developers/applications) にアクセスします。  
2. 「New Application」をクリックし、任意の名前でアプリを作成。  
3. 左のメニューから **Bot** を選び、「Add Bot」をクリック。  
4. Bot の **Token** をコピーしてください（後で Replit に貼り付けます）。  

⚠️ **Token は他人に絶対に教えないでください。**

---

### 3. Replit の環境変数を設定
Replit の「Secrets」タブを開き、次のキーを追加します：  

- `TOKEN` → 先ほどコピーした Bot のトークン  

---

### 4. Bot を Discord サーバーに追加
1. Developer Portal のアプリ設定で「OAuth2 → URL Generator」を開きます。  
2. `bot` と `applications.commands` にチェックを入れます。  
3. Bot Permissions は「Send Messages」「Use Slash Commands」程度でOK。  
4. 生成されたリンクを開き、Bot を自分のサーバーに招待してください。  

---

### 5. Bot を起動
Replit 上で「Run」を押すと、Bot がオンラインになります。  
サーバーで `/ping` と入力すると、Bot が反応するはずです。  

---

## ✅ バッジの取得
Discord の規定により、**ボットを使ってコマンドを実行してから数日後**、  
[こちらのページ](https://discord.com/developers/active-developer) で **Active Developer Badge** を申請できます。  

---

## 📜 ライセンス
このプロジェクトは [MIT License](./LICENSE) で公開されています。

