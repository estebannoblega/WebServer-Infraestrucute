# WebServer Infrastructure

Infraestructura web basada en Docker y NGINX.

## Arquitectura

- Un contenedor NGINX actúa como reverse proxy y servidor web estático.
- Las landing pages estáticas se sirven directamente desde NGINX.
- Las aplicaciones que requieran backend utilizan contenedores independientes.
- Todo el proyecto se administra desde `/opt/webserver`.
- La configuración y el contenido estático se versionan mediante Git.
- Los despliegues son manuales mediante Git.

## Estructura

```text
/opt/webserver/
├── Dockerfile
├── docker-compose.yml
├── conf/
│   ├── nginx.conf
│   ├── sites/
│   └── snippets/
├── sites/
├── certbot/
└── logs/
```
## Operación

Validar configuración:

docker exec reverse-proxy-prod nginx -t

Recargar NGINX:

docker exec reverse-proxy-prod nginx -s reload

Ver estado:

docker compose ps

## Como agregar una nueva web estática

1. Crear el directorio:
   sites/nueva-web/

2. Agregar los archivos de la web.

3. Crear su configuración:
   conf/sites/nueva-web.conf

4. Validar NGINX:
   docker exec reverse-proxy-prod nginx -t

5. Recargar NGINX:
   docker exec reverse-proxy-prod nginx -s reload

6. Probar el sitio.

7. Versionar:
   git add .
   git commit -m "feat: add nueva-web"
   git push