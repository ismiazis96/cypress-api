# 🧪 Automation API Testing – Test API By kelasotomesyion

Project ini dibuat untuk melakukan pengujian otomatis (end-to-end) terhadap [Restful Booker API](https://testapi.kelasotomesyen.com/) menggunakan:

- [Mocha](https://mochajs.org/) – Test framework
- [Chai](https://www.chaijs.com/) – Assertion library
- [Supertest](https://github.com/visionmedia/supertest) – HTTP assertions
- [dotenv](https://www.npmjs.com/package/dotenv) – Environment variable support

---

## 🧰 Installation

1. Clone repositori atau siapkan folder project:

```bash
git clone <repo-url>
cd automation-api-testing
```

2. Install dependencies:

```bash
npm install mocha chai supertest dotenv
```

---

## 📁 Struktur File

Contoh struktur sederhana:

```
automation-api-testing/
├── data/
│   ├── auth.json
│   └── items.json
├── .env
├── e2e-api-clean.spec.js
├── package.json
└── README.md
```

---

## ⚙️ .env Configuration

Buat file `.env` di root project:

```env
BASE_URL=(https://testapi.kelasotomesyen.com
```

---

## 🧪 Menjalankan Test Case

### 1. Jalankan Test via Terminal

```bash
npx mocha e2e-api-clean.spec.js
```

---

## ✅ Fitur Yang Diuji

- [x] Login dan generate token
- [x] Create items
- [x] Get items by ID
- [x] Delete items

## ✍️ Author

- **Mohamad Ismi Azis**\
  QA Engineer | Automation Enthusiast\
  [GitHub](https://github.com/ismiazis96) | [LinkedIn](https://linkedin.com/in/ismiazis96)

---
