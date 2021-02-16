# Instructions

## Requirements
Python 3.6
Virtualenv
Django 3.0.4
Angular CLI

## Real Estate Calculator
1. Setup project, a virtual environment, and install requirements

Backend Side
```
git clone https://github.com/tmttan03/real-estate-calculator.git
virtualenv -p python3 venv
source venv/bin/activate
pip install -r requirements.txt
```

Frontend Side
```
npm install
ng build --watch
```

2. Create `Environment File` then after that

```
#EMAIL BACKEND
EMAIL_HOST_USER = ""
EMAIL_HOST_PASSWORD = ""
DEFAULT_FROM_EMAIL = ""

#Base URL
PROTOCOL = "http://"
DOMAIN_NAME = "127.0.0.1:8000"

WEBAPP_RESET_PASSWORD_PATH = "reset-password"
```

3. Migrate the files with

```
$ python manage.py migrate
```

4. Collect Static Files  
```
$ python manage.py collectstatic
```

5. To build SCSS Files go to `assets/`
```
$ sass --watch scss/style.scss css/style.css
```

