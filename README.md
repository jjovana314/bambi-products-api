<p align="center">
  <a href="https://bambi.rs/" target="blank"><img src="bambi.jpg" alt="Bambi Logo" width="250"/></a>
</p>

<p align="center">API for product catalog for Koncern Bambi a.d.</p>

## Run API

```bash
# build docker container
$ sudo docker-compose build

# run container
$ sudo docker-compose up
```

## Tools used in development:

- [TypeScript](https://www.typescriptlang.org/)
- [NestJS](https://nestjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)
- [Docker](https://www.docker.com/)
- [Postman](https://www.postman.com/)


## Documentation:

```bash
$ npx @compodoc/compodoc -p tsconfig.json -s
```

## Database:

- Register structure

firstName: Optional string, represents users first name<br>
lastName: Optional string, represents users last name<br>
dateOfBirth: Optional string, represents users date of birth<br>
username: Optional string, represents username<br>
password: Optional string, represents users password<br>
email: Optional string, represents users email<br>

- Login structure

username: Optional string, represents username<br>
password: Optional string, represents users password<br>

- Admin structure

id: Optional string, represents uniqe identificator<br>
productCode: Optional string, represents code of product that is commented<br>
visitorNick: Optional string, represents nick of current visitor<br>
anyContactData: Optional string, represents any contact that visitor wants to give<br>
aproved: Optional boolean, true if comment is aproved, false otherwise<br>

- Product structure (productClass)

id: String, represents product class id<br>
title: String, represents product class title<br>

- Products (product with all details)


## Author

- [Jovana Jovanović](https://github.com/jjovana314)
