"""First request to obeservacion-convencial endpoint, that provides the link to the json with the data.

curl -X 'GET' \
  'https://opendata.aemet.es/opendata/api/observacion/convencional/todas' \
  -H 'accept: application/json' \
  -H 'api_key: your-api-key'
"""

response = {
    "descripcion": "exito",
    "estado": 200,
    "datos": "https://opendata.aemet.es/opendata/sh/9184caf1",
    "metadatos": "https://opendata.aemet.es/opendata/sh/55c2971b",
}
