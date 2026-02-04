---
sidebar_position: 3
---

## Mobil dokumentáció

## Bevezetés a React-be

Ez a React Native alapú mobilalkalmazás a korábban bemutatott Pokémon-adatokat szolgáltató backend rendszer kliensoldali kiegészítéseként készült. Az alkalmazás célja, hogy mobil környezetben jelenítse meg az API-ból származó adatokat egy egyszerű és áttekinthető listanézet segítségével. A fejlesztés Expo keretrendszerrel történt, amely megkönnyíti a gyors tesztelést és a több platformon történő futtatást. A projekt jól szemlélteti, hogyan lehet egy meglévő REST API-hoz React Native alkalmazást csatlakoztatni.

## Megvalósítás

A mobilalkalmazás felépítése komponensalapú, ahol az egyes listaelemek külön komponensként kerülnek megvalósításra, ezzel biztosítva az újrafelhasználhatóságot és a könnyű bővíthetőséget. A lista megjelenítéséért egy FlatList felel, amely hatékonyan kezeli a nagyobb elemszámot is. Az alkalmazás jelenlegi formájában alapfunkciókat valósít meg, azonban stabil alapot nyújt a későbbi fejlesztésekhez, például valós Pokémon-adatok lekérdezéséhez, részletes nézetek kialakításához vagy navigációs funkciók
