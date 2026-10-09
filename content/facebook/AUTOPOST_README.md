# Facebook Auto-Posting System — Save100ThisMonth

Objetivo: publicar automáticamente (o semi-automáticamente) artículos de alto RPM con hooks que generen clics honestos.

## Realidad técnica (sin humo)
Facebook NO permite publicar 100% automático gratis sin:
1. Una Facebook Page + App en developers.facebook.com
2. Un Page Access Token (larga duración)
3. Un programador (GitHub Actions con cron, Buffer, Metricool, o script propio)

Sin esos 3 datos NO se puede autopostear. Este repo deja todo preparado para que cuando crees la Page + token, solo pegues 2 secretos y funcione.

## Archivos de este sistema
- `queue.json` — cola de publicaciones (orden, URL, hook, variante, UTM, mejor hora)
- `templates/post-template.txt` — plantilla de texto por post
- `templates/first-comment.txt` — primer comentario con enlace
- `.github/workflows/facebook-autopost.yml` — workflow listo (requiere secretos FB_PAGE_ID y FB_PAGE_TOKEN)
- `../facebook-hooks.md` — hooks por artículo (ya existente)

## Reglas anti-baneo
- Máx 1-2 posts/día al inicio. Más = alcance muerto.
- 80% valor / 20% enlace directo. Alterna: pregunta + carrusel + enlace.
- Nunca el mismo texto 2 veces: rota las 4 variantes de hook.
- Enlace en primer comentario los primeros 30 días (test A/B contra enlace en post).
- No acortes con bit.ly sospechosos: usa la URL + UTM del sitio.
- No compres likes ni uses bots: mata el Page quality score.

## Métricas que importan
CTR del enlace, coste por clic (si pagas), RPM por artículo en AdSense (Page RPM), tiempo en página desde Facebook, rebote. Si CTR alto + rebote alto = hook engañoso: cámbialo.
