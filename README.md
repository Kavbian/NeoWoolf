# NeoWoolf

A Django-based online shop web application featuring product listings, category browsing, and an admin management panel.

## 🛠 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Python 3** | Core language |
| **Django** | Web framework |
| **Pillow** | Image processing |
| **SQLite** | Default database |

## 📁 Project Structure

```text
NeoWoolf/
├── NeoWoolf/               # Project configuration
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
├── Shop/                   # Main shop application
│   ├── models.py
│   ├── views.py
│   ├── urls.py
│   ├── admin.py
│   └── migrations/
├── templates/              # HTML templates
│   ├── base.html
│   ├── includes/
│   │   ├── header.html
│   │   ├── footer.html
│   │   ├── pagination.html
│   │   └── right-sidebar.html
│   └── shop/
│       ├── index.html
│       ├── item_list.html
│       ├── item_detail.html
│       └── military.html
├── static/                 # Static files
│   ├── css/
│   ├── js/
│   ├── img/
│   └── video/
├── media/                  # User-uploaded media
├── manage.py
└── requirements.txt
```

## 🚀 Getting Started

### Prerequisites
- Python 3.x

### 1. Clone the repository
```bash
git clone <repository-url>
cd NeoWoolf
```

### 2. Create and activate a virtual environment
```bash
# Create
python -m venv venv

# Activate — Windows (PowerShell)
.env\Scriptsctivate

# Activate — macOS/Linux
source venv/bin/activate
```

### 3. Install dependencies
```bash
pip install -r requirements.txt
```

### 4. Apply database migrations
```bash
python manage.py migrate
```

### 5. Create an admin superuser
```bash
python manage.py createsuperuser
```

### 6. Start the development server
```bash
python manage.py runserver
```

Then open your browser and visit:
- 🌐 **App:** `http://127.0.0.1:8000`
- 🔧 **Admin panel:** `http://127.0.0.1:8000/admin`

## 📝 Notes
- **SQLite** is used by default — no additional database setup is required for local development.
- Uploaded images are stored in the `media/` directory.
- Static assets (CSS, JS, images, video) are served from the `static/` directory.
