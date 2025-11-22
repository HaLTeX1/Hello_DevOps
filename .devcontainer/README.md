# Hello DevOps – Node.js + Express példa alkalmazás

Ez a projekt egy egyszerű „Hello World” alkalmazás, amely a DevOps beadandó követelményeihez készült.  
A projekt tartalmaz:

- egyszerű HTTP alkalmazást (Node.js + Express)
- buildelési lépést
- Dockerfile-t + konténer futtatási instrukciókat
- git / trunk-based workflows példát
- Dev Container konfigurációt (VS Code + Codespaces)

---

# 1. Alkalmazás futtatása lokálisan

## 1.1. Telepítés
**npm install** parancs kiadása szükséges

## 1.2. Futtatás
Ezután az alkalmazás elérhető:  
 http://localhost:8080

# 2. Buildelés
A projekt egyszerű Node.js app, nincs külön build folyamat.  
A követelmény miatt szerepel a build script:

**npm run build**

# 3. Git használata – trunk-based workflow
A repository a következő elvek szerint készült:

- **main** = trunk  
- fejlesztések külön **feature branch**-ekben  
- értelmes commit üzenetek  
- több egymásra épülő commit
A változtatások mind vissza lettek merge-ölve a `main` branchbe.

# 4. Dockerizálás
A projekt tartalmaz egy működő Dockerfile-t, amelyből image építhető és futtatható.

## 4.1. Docker image build
**docker build -t hello-devops:v1 .**

## 4.2. Docker konténer futtatása
**docker run -p 8080:8080 hello-devops:v1**

Ezután az app elérhető:  
http://localhost:8080

# 5. Dev Container (VS Code / GitHub Codespaces)
A projekt tartalmaz egy `.devcontainer` mappát:
Ez biztosítja, hogy a projekt **konténerizált fejlesztőkörnyezetben** is futtatható legyen.

## 5.1. Használat VS Code-ban

    1. Nyisd meg a projektet VS Code-ban.
    2. F1 → Dev Containers: Reopen in Container
    3. A konténer felépül, majd automatikusan lefut: npm install

Az app így is elérhető a szokásos címen:  
http://localhost:8080

## 5.2. Használat GitHub Codespaces-ben
    1. GitHub → Code → Create Codespace
    2. A Codespace automatikusan a DevContainer-t használja
    3. Indítás: npm start

## Végszó
A projektet Réz Levente László készítette. \
Neptun kód: RTL7JM
