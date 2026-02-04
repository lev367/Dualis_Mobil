---
sidebar_position: 1
---

## Backend dokumentáció

## Program célja

A program egy Node.js alapú backend alkalmazás, amely egy egyszerű blogplatform kiszolgálására szolgál. Az alkalmazás RESTful API-n keresztül teszi lehetővé cikkek létrehozását, lekérdezését és törlését, miközben az adatkezelést egy relációs adatbázis biztosítja. A fejlesztés során a Sequelize ORM került alkalmazásra, amely megkönnyíti az adatbázis-műveletek kezelését és biztosítja az adatmodellek egységes kezelését. A projekt MVC architektúrát követ, így a logika, az adatok és az útvonalkezelés jól elkülönül egymástól, ami átláthatóbb és könnyebben karbantartható kódszerkezetet eredményez.

### Megvalósítás

A rendszer egy külső szolgáltatással is integrálva van, amely a PokéAPI-n keresztül Pokémon adatok lekérdezését teszi lehetővé. Ez az integráció bemutatja, hogyan lehet egy külső REST API-t biztonságosan és hatékonyan beépíteni egy meglévő backend alkalmazásba. A fejlesztési környezetben SQLite adatbázis kerül használatra az egyszerű beállítás érdekében, míg éles környezetben a rendszer könnyedén bővíthető vagy áthelyezhető MySQL adatbázisra. Az alkalmazás célja egy stabil, bővíthető backend megvalósítása, amely jó alapot nyújt további funkciók és szolgáltatások fejlesztéséhez.
