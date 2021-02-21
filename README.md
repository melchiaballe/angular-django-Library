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
cd frontend/scripts/fe
npm install
ng build --watch
```

2. Migrate the files with
```
$ python manage.py migrate
```

3. Create Superuser
```
$ python manage.py createsuperuser
```

4. Collect Static Files  
```
$ python manage.py collectstatic
```

5. To build SCSS Files go to `frontend/scripts/fe/src/assets/` then run this command:
```
$ sass --watch sass/style.scss css/style.css
```

