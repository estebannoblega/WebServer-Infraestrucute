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

/opt/webserver
├── Dockerfile
├── docker-compose.yml
├── conf/
│   ├── nginx.conf
│   ├── sites/
│   └── snippets/
└── sites/

## Operación

Validar configuración:

docker exec reverse-proxy-prod nginx -t

Recargar NGINX:

docker exec reverse-proxy-prod nginx -s reload

Ver estado:

docker compose ps