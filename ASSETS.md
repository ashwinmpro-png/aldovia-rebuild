# Aldovia Asset Specification

This is the canonical specification for every image and video the site needs.
Drop files into the paths below using the filenames listed. The site reads
from these paths directly. No code changes required when assets arrive.

## Universal rules

- **Format**: JPG or WebP for stills. MP4 (H.264) for video. Optionally also
  WebM (VP9) for video as a secondary source.
- **Color**: sRGB only. No P3, no CMYK, no embedded profiles other than sRGB.
- **Quality**: JPG at 85 quality. WebP at 80. No visible compression.
- **Stripped metadata**: no GPS, no camera tags. Use ExifTool or `mogrify -strip`.
- **Filenames**: lowercase, hyphen-separated, no spaces, ASCII only.
- **Aspect ratios**: respect the ratios listed below. Crop ahead of time, do
  not rely on `object-fit` to fix bad crops.

## Landing Page video

The Landing Page is the brand's first impression. It plays before the home page
on a visitor's first session. Two cuts are required, one per orientation.

| File | Path | Resolution | Aspect | Duration | Notes |
|---|---|---|---|---|---|
| Desktop landing video | `public/landing/landing-desktop.mp4` | 1920×1080 minimum, 3840×2160 preferred | 16:9 | 6 to 12 seconds | H.264, silent, looping not required, end on the bud or the wordmark hold |
| Desktop landing video (alt) | `public/landing/landing-desktop.webm` | same | 16:9 | same | Optional. VP9 fallback for smaller payload |
| Mobile landing video | `public/landing/landing-mobile.mp4` | 1080×1920 minimum | 9:16 | 6 to 12 seconds | Portrait recut, same beats |
| Mobile landing video (alt) | `public/landing/landing-mobile.webm` | same | 9:16 | same | Optional |
| Desktop poster | `public/landing/landing-desktop.jpg` | 1920×1080 | 16:9 | static | First-frame still, used as poster while the video loads |
| Mobile poster | `public/landing/landing-mobile.jpg` | 1080×1920 | 9:16 | static | First-frame still |

The video must be **silent**. Browsers block audio autoplay on first visit.
The component sets `muted` and `playsinline` regardless, so no soundtrack will
ever reach the user.

Cap the file size aggressively. Aim for desktop under 6 MB, mobile under 3 MB.
Use HandBrake or `ffmpeg` with CRF 23, two-pass if you have the time.

## Home page hero carousel

Four full-bleed images that rotate behind the headline. The order is important.

| Slot | Path | Resolution | Aspect | Suggested subject |
|---|---|---|---|---|
| 1 | `public/assets/hero-carousel/01-wedding.jpg` | 2880×1620 | 16:9 | The flagship wedding setup, golden hour |
| 2 | `public/assets/hero-carousel/02-dining.jpg` | 2880×1620 | 16:9 | Ambrosia interior or a plated dish |
| 3 | `public/assets/hero-carousel/03-galaxy-ballroom.jpg` | 2880×1620 | 16:9 | Galaxy Grand Ballroom set for a gala |
| 4 | `public/assets/hero-carousel/04-convention.jpg` | 2880×1620 | 16:9 | Ocean Convention Center, wide shot |

Provide a `-mobile` variant cropped to 3:4 if the desktop frame loses its
subject at a portrait crop. Example: `01-wedding-mobile.jpg` at 1440×1920.

## Rooms and Suites

Six rooms. Each gets one hero image and three gallery shots.

For each id below, drop files at `public/assets/rooms/<id>/`:

```
hero.jpg     2400×1600   3:2   The hero shot for the room
g1.jpg       1600×1200   4:3   Gallery 1: a wider angle
g2.jpg       1600×1200   4:3   Gallery 2: detail, fixtures, textures
g3.jpg       1600×1200   4:3   Gallery 3: bathroom or living area
```

Ids: `deluxe-room`, `luxury-room`, `1-bedroom-suite`, `2-bedroom-suite`,
`deluxe-suite`, `executive-suite`.

## Dining

Five F&B venues. Same pattern.

`public/assets/dining/<id>/{hero,g1,g2,g3}.jpg`

Ids: `ambrosia`, `oasis`, `mirage`, `square-cafe`, `pool-bar`.

## Event Venues

Fourteen venues. Larger ones get galleries, smaller ones can get one hero.

`public/assets/venues/<id>/{hero,g1,g2,g3}.jpg`

Hero at 2400×1600, gallery shots at 1600×1200. If a venue only has one good
shot, drop only `hero.jpg`.

Ids: `galaxy-grand-ballroom`, `galaxy-grand-courtyard`, `galaxy-grand-dining`,
`eden-lawn`, `lotus`, `sunflower`, `rose`, `orchid`, `jasmine`, `tulip`, `lily`,
`geneva-boardroom`, `pearl-boardroom`, `ocean-convention-center`.

## Experiences and Packages

Five packages. One hero, two supporting.

`public/assets/experience/<id>/{hero,g1,g2}.jpg`

Hero at 2000×1400 (10:7), supporting at 1600×1200.

Ids: `morning-escape`, `still-afternoon`, `unhurried-day`, `complete-retreat`,
`gentle-evening`.

## Activities

Grouped by category.

`public/assets/activities/indoor/{table-tennis,badminton,billiards,squash,board-games}.jpg`
`public/assets/activities/outdoor/{basketball,cycling,swimming,pickleball}.jpg`
`public/assets/activities/spa/{ayurvedic-therapies,couples-spa}.jpg`

All at 1600×1200, 4:3.

## Wedding

Five feature images plus a hero.

```
public/assets/wedding/hero.jpg                  2880×1620  16:9
public/assets/wedding/feature-venues.jpg        1600×1200  4:3
public/assets/wedding/feature-themes.jpg        1600×1200  4:3
public/assets/wedding/feature-stays.jpg         1600×1200  4:3
public/assets/wedding/feature-dining.jpg        1600×1200  4:3
public/assets/wedding/feature-planning.jpg      1600×1200  4:3
```

## About

Founder portrait plus three lifestyle shots.

```
public/assets/about/founder.jpg                 1200×1600  3:4   Dr. Ronald Colaco portrait
public/assets/about/grounds-01.jpg              2400×1600  3:2   Wide grounds shot, optional
public/assets/about/grounds-02.jpg              2400×1600  3:2   Optional
public/assets/about/grounds-03.jpg              2400×1600  3:2   Optional
```

## Social and Open Graph

Three sharing images for Facebook, X, and LinkedIn cards.

```
public/assets/og/default.jpg                    1200×630   1.91:1   Used by every page that does not override
public/assets/og/wedding.jpg                    1200×630   1.91:1   Used by /wedding
public/assets/og/corporate.jpg                  1200×630   1.91:1   Used by /corporate
```

## Brand mark and favicon

If a wordmark or logomark SVG exists, drop it at:

```
public/assets/brand/wordmark.svg
public/assets/brand/monogram.svg
public/favicon.ico
public/apple-icon.png         180×180
public/icon.png               512×512
```

## Drop and forget

Once a file is in its specified path, the site will render it on the next
deploy. No code change needed for any of the paths in this document. The
landing page video, the carousel images, the rooms, the dining, the venues,
the experience packages, the activities, the wedding features, the founder,
the OG cards, all read from these paths.

The Warden drops. The site renders.
