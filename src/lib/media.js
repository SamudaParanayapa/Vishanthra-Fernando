// Central place for every photo in /photos.

const modules = import.meta.glob('../../photos/*.{jpeg,jpg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});

export const photos = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src], i) => ({
    id: path,
    src,
    index: i,
    alt: `Vishanthra Fernando — performance photograph ${i + 1}`,
  }));

/**
 * Look a photo up by any part of its filename.
 *
 * Prefer this over a bare index: dropping a new file into /photos reshuffles
 * every index, which would silently reassign the photo in each section.
 * Names are stable, so these picks survive new uploads.
 */
export function photo(match, fallbackIndex = 0) {
  const hit = match ? photos.find((p) => p.id.includes(match)) : null;
  return hit ?? photos[fallbackIndex] ?? photos[0];
}

export const photoAt = (i) => photos[i] ?? photos[0];

/* ------------------------------------------------------------------
   Curated picks. Change the filename here to swap a section's photo.
------------------------------------------------------------------ */
export const heroPhoto = photo('13.24.39', 0);   // stage, mic in hand
export const aboutPhoto = photo('13.24.40', 1);  // singing, white stage dress

export const facetPhotos = {
  vocalist: photo('13.24.39', 0),
  dancer: photo('13.24.41', 2),   // Kandyan dance troupe
  musician: photo('13.24.49', 6), // drum kit
};

// Scanned film prints from the family archive — the heritage section's
// strongest asset. Add more here as they are digitised.
export const archivePhotos = [
  {
    src: photo('13.24.43 (1)', 3)?.src,
    caption: 'Vesak Natya legacy',
    sub: 'A B. Fernando stage production',
  },
  {
    src: photo('13.24.43.jpeg', 4)?.src,
    caption: 'The rehearsal hall',
    sub: 'Where the craft was learned',
  },
];
