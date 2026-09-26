import { Button } from './Button';
import { InfoRow } from './InfoRow';

/** Address and a "Get directions" button above a map embed. */
export function MapBlock({ address, city, embedSrc, directionsHref }: { address: string; city: string; embedSrc?: string; directionsHref?: string }) {
  const q = encodeURIComponent(address + ', ' + city);
  const src = embedSrc || 'https://maps.google.com/maps?q=' + q + '&z=15&output=embed';
  const dir = directionsHref || 'https://www.google.com/maps/dir/?api=1&destination=' + q;
  return <div>
    <div className="lcc-map__head">
      <InfoRow icon="map-pin" title={address} sub={city} />
      <Button variant="outline" icon="navigation" href={dir}>Get directions</Button>
    </div>
    <div className="lcc-map__frame">
      <iframe title={'Map of ' + address + ', ' + city} src={src} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </div>
  </div>;
}
