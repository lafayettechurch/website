import {
  Baby, Calendar, CalendarDays, ChevronLeft, ChevronRight, CircleCheck, CirclePlay, Clock, HeartHandshake, Hourglass, Image, Info,
  List, ListVideo, Mail, MapPin, Menu, Navigation, Phone, Sparkles, Users, X,
  type LucideProps,
} from 'lucide-react';

// Brand marks were removed from current Lucide; these are the Lucide 0.460 paths the prototype used.
function Facebook({ size, className, style }: LucideProps) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={size} height={size} aria-hidden="true" className={className} style={style}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
}
function Instagram({ size, className, style }: LucideProps) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={size} height={size} aria-hidden="true" className={className} style={style}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>;
}

const ICONS = {
  baby: Baby, calendar: Calendar, 'calendar-days': CalendarDays, 'chevron-left': ChevronLeft, 'chevron-right': ChevronRight,
  'circle-check': CircleCheck, 'circle-play': CirclePlay, clock: Clock,
  facebook: Facebook, 'heart-handshake': HeartHandshake, hourglass: Hourglass, image: Image, info: Info,
  instagram: Instagram, list: List, 'list-video': ListVideo, mail: Mail, 'map-pin': MapPin, menu: Menu,
  navigation: Navigation, phone: Phone, sparkles: Sparkles, users: Users, x: X,
};

export type IconName = keyof typeof ICONS;

/** Lucide line icon. Decorative by default; pass `label` when it stands alone. */
export function Icon({ name, size = 24, color, label, className, style }: {
  name: IconName; size?: number; color?: string; label?: string; className?: string; style?: React.CSSProperties;
}) {
  const C = ICONS[name];
  return <C size={size} className={className} style={{ color, ...style }} aria-hidden={label ? undefined : true} aria-label={label} role={label ? 'img' : undefined} />;
}
