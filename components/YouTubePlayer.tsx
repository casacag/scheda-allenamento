import React from "react";

export default function YouTubePlayer({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  return (
    <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
      <iframe
        className="absolute left-0 top-0 h-full w-full rounded-xl shadow"
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        loading="lazy"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

