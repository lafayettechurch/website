'use client';
import { useEffect, useState } from 'react';
import { VideoFrame } from '@/components/ds/VideoFrame';
import { localParts, weekdayOf } from '@/lib/dates';

type Copy = { liveLabel: string; liveSub: string; offLabel: string; offSub: string };

/**
 * The Watch page's big video panel. During the Sunday stream window (church-local time)
 * it points at the live stream; the rest of the week it points at the sermon playlist.
 * The live URL is YouTube's /live address, which always opens whatever is streaming now,
 * so no one has to update a link each week.
 */
export function LiveVideoFrame({ liveHref, playlistHref, start, end, copy }: {
  liveHref: string; playlistHref: string; start: string; end: string; copy: Copy;
}) {
  const [live, setLive] = useState(false);
  useEffect(() => {
    const check = () => {
      const { date, time } = localParts(new Date());
      setLive(weekdayOf(date) === 0 && time >= start && time < end);
    };
    check();
    const t = setInterval(check, 60_000);
    return () => clearInterval(t);
  }, [start, end]);

  return live
    ? <VideoFrame href={liveHref} label={copy.liveLabel} sub={copy.liveSub} />
    : <VideoFrame href={playlistHref} label={copy.offLabel} sub={copy.offSub} />;
}
