"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { galleryCategories, galleryItems } from "@/content/site-data";

export function GalleryGrid() {
  const [category, setCategory] = useState<(typeof galleryCategories)[number]>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => galleryItems.filter((item) => category === "All" || item.category === category),
    [category],
  );

  const selected = selectedIndex === null ? null : filtered[selectedIndex];

  function move(direction: number) {
    if (selectedIndex === null || !filtered.length) return;
    setSelectedIndex((selectedIndex + direction + filtered.length) % filtered.length);
  }

  return (
    <>
      <div className="gallery-filters" aria-label="Filter gallery">
        {galleryCategories.map((item) => (
          <Button
            key={item}
            type="button"
            variant={category === item ? "default" : "outline"}
            aria-pressed={category === item}
            onClick={() => {
              setCategory(item);
              setSelectedIndex(null);
            }}
          >
            {item}
          </Button>
        ))}
      </div>

      <p className="gallery-count" aria-live="polite">Showing {filtered.length} photographs</p>

      <div className="gallery-grid">
        {filtered.map((item, index) => (
          <figure className={item.featured && category === "All" ? "gallery-card gallery-card--featured" : "gallery-card"} key={item.src}>
            <button type="button" onClick={() => setSelectedIndex(index)} aria-label={`Open image: ${item.caption}`}>
              <span className="gallery-card__media">
                <img src={item.src} alt={item.alt} loading="lazy" />
                <span className="gallery-card__expand"><Expand aria-hidden="true" /> View</span>
              </span>
              <span className="gallery-card__body">
                <span>{item.category}</span>
                <strong>{item.caption}</strong>
              </span>
            </button>
          </figure>
        ))}
      </div>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelectedIndex(null)}>
        <DialogContent className="gallery-dialog" showCloseButton>
          {selected ? (
            <>
              <DialogTitle className="sr-only">{selected.caption}</DialogTitle>
              <DialogDescription className="sr-only">{selected.alt}</DialogDescription>
              <img src={selected.src} alt={selected.alt} />
              <div className="gallery-dialog__caption">
                <div><span>{selected.category}</span><strong>{selected.caption}</strong></div>
                <small>{(selectedIndex ?? 0) + 1} / {filtered.length}</small>
              </div>
              <button className="gallery-dialog__nav gallery-dialog__nav--prev" type="button" onClick={() => move(-1)} aria-label="Previous image"><ChevronLeft /></button>
              <button className="gallery-dialog__nav gallery-dialog__nav--next" type="button" onClick={() => move(1)} aria-label="Next image"><ChevronRight /></button>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
