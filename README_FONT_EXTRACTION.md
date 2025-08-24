# Rawest Font Çıkarma Rehberi

## PDF'den Font Çıkarma Yöntemleri

### Yöntem 1: Online Araçlar

1. **ExtractPDF.com** veya benzeri siteleri kullanın
2. PDF dosyanızı yükleyin
3. "Extract Fonts" seçeneğini seçin
4. İndirilen font dosyalarını `fonts/` klasörüne kopyalayın

### Yöntem 2: Terminal (macOS)

```bash
# PDF'deki fontları listele
pdffonts your-rawest-font.pdf

# Font çıkarma aracı yükle
brew install poppler

# Fontları çıkar
pdffonts -detail your-rawest-font.pdf
```

### Yöntem 3: Adobe Acrobat

1. PDF'yi Adobe Acrobat'ta açın
2. File → Properties → Fonts
3. Font listesini görün ve export edin

### Yöntem 4: FontForge (Ücretsiz)

1. FontForge'u indirin: https://fontforge.org/
2. PDF'yi açın
3. Font'u export edin (.ttf, .otf, .woff formatında)

## Font Dosyaları Hazır Olduğunda

Rawest font dosyalarını şu isimlerle `fonts/` klasörüne koyun:

- `Rawest-SemiBold.ttf`
- `Rawest-SemiBold.woff`
- `Rawest-SemiBold.woff2`

Dosyalar hazır olduğunda CSS otomatik olarak bunları kullanacak!

## Fallback Fontlar

Rawest yüklenene kadar bu fontlar kullanılıyor:

- **JetBrains Mono**: Monospace stili için
- **Space Grotesk**: Modern sans-serif için
- **Inter**: Genel kullanım için
