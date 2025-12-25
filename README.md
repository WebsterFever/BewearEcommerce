"# BewearEcommerce" 
# BewearEcommerce

BewearEcommerce is a modern **e-commerce backend** built with **Node.js 22**, **TypeScript**, **PostgreSQL**, and **Drizzle ORM**.

This project focuses on:
- High performance
- Strong type safety
- SQL-first design
- Clean relational database modeling

---

## 🚀 Tech Stack

- **Node.js 22**
- **TypeScript**
- **PostgreSQL**
- **Drizzle ORM**
- **Drizzle Kit**
- **Drizzle Studio**
- **tsx**
- **dotenv**

---

## 📁 Project Structure

├─ src/
│ └─ db/
│ ├─ schema.ts # Tables & relations
│ ├─ seed.ts # Database seed script
│ └─ index.ts # Database connection
├─ drizzle/
│ └─ migrations/ # Generated migrations
├─ drizzle.config.ts
├─ .env
├─ package.json
└─ README.md


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/WebsterFever/BewearEcommerce.git
cd BewearEcommerce

npm install

env 
DATABASE_URL=postgresql://user:password@localhost:5432/bewear

npx drizzle-kit generate
npx drizzle-kit migrate

seed the database 
npx tsx --env-file=.env src/db/seed.ts

Rizzle studio
npm drizzle-kit studio
