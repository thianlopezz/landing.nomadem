import Image from "next/image";
import React from "react";

type FeatureCardProps = {
  title: string;
  description?: string;
  url?: string;
  className?: string;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  imgClassName?: string;
};

export default function FeatureCard({
  title,
  description,
  url,
  className = "",
  imgSrc,
  imgWidth,
  imgHeight,
  imgClassName,
}: FeatureCardProps) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Image
        src={imgSrc}
        alt={title}
        width={imgWidth}
        height={imgHeight}
        className={imgClassName}
      />
      {url ? (
        <a href={url} target="_blank">
          <h3 className="text-2xl font-bold text-rose-400 mb-3 text-center">
            {title}
          </h3>
        </a>
      ) : (
        <h3 className="text-2xl font-bold text-rose-400 mb-3 text-center">
          {title}
        </h3>
      )}

      {description && (
        <p className="mt-2 mb-4 text-lg text-slate-600 text-center">
          {description}
        </p>
      )}
    </div>
  );
}
