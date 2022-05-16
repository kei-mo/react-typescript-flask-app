# react-typescript-flask-app
A template repository of an app using react, typescript, and flask (as an api).

This repo. is typescript (and React Router v6) version of this awesome tutorial and repository.  
* Tutorial : https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project
* Repository : https://github.com/miguelgrinberg/react-flask-app  
  
Docker setting, nginx setting, and flask api codes are basically a copy from the repository above.  
(Changed slightly to fit a recent version of javascript and python.)  

## Tutorial

```bash
git clone git@github.com:kei-mo/react-typescript-flask-app.git
cd react-typescript-flask-app.git
```

Build dockers
```bash
docker build -f Dockerfile.api -t react-flask-app-api .
docker build -f Dockerfile.client -t react-flask-app-client .
```

```bash
docker-compose up
```
Sample app will run on `http://localhost:3000/`. 
You can also access page2 from this url `http://localhost:3000/page2`.


## How to reproduce this repository
Here's an overview of what I did to create this template app. 
### Create app.
```bash
npx create-react-app react-typescript-flask-sample-app --template typescript
```

### Install some packages.
```bash
npm install react-router-dom @types/react-router-dom # for multipage setting
```

### Copy some files listed bellow from a reference repository
Reference repo.: https://github.com/miguelgrinberg/react-flask-app
* `api/*`
* `deployment/*`
* `Dockerfile.api`
* `Dockerfile.client`
* `docker-compose.yml`

### Chage some files.
Critical point is to change `deployment/nginx.default.conf` as below. You need to do this to use router (multipage) properly.  
**before**
```
    location / {
        try_files $uri $uri/ =404;
        add_header Cache-Control "no-cache";
    }
```

**after**
```
    location / {
        try_files $uri $uri/ /index.html;
        add_header Cache-Control "no-cache";
    }
```
  
I also changed some other files, including but not limited to Dockerfile.client, and Dockerfile.api.

### Write some codes 
Write some typescript codes.
