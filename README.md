# Fólio — site

Site de apresentação da **Fólio**, estúdio de papelaria de casamento — menus de mesa e planos de mesa (*seating plan*).

Site estático, sem dependências de build. Basta abrir `index.html` ou servir a pasta.

## Estrutura

```
index.html          Página única (hero + serviços + trabalho + processo + contacto)
css/styles.css      Estilos — identidade Playfair Display + Inter
js/main.js          Interações mínimas (nav mobile, header, reveal)
assets/
  hero.mp4          Vídeo de fundo do hero
  logo-mark.svg     Emblema circular
  logo-wordmark.svg Lettering "Fólio" (usa currentColor)
```

## Ver localmente

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

## Identidade

| Nome  | Hex       | Uso              |
|-------|-----------|------------------|
| Tinta | `#22303C` | texto, fundos escuros |
| Creme | `#EFE8DA` | papel, texto claro    |
| Névoa | `#8FA0AD` | secundária            |

Tipos: **Playfair Display** (títulos) · **Inter** (texto), via Google Fonts.

## Por personalizar

Os contactos são exemplos — substituir em `index.html` (secção `#contacto` e rodapé):

- Email `ola@folio.pt`
- Instagram `@folio`
- WhatsApp `+351 900 000 000`

Os pratos e mesas em *Trabalho* são amostras da identidade — trocar por peças reais quando existirem fotografias.
