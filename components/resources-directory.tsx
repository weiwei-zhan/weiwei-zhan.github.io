"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { resourceItems } from "@/content/resources";

const ALL = "All resources";

export function ResourcesDirectory() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(ALL);

  const categories = useMemo(
    () => Array.from(new Set(resourceItems.map((item) => item.category))),
    [],
  );

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return resourceItems.filter((item) => {
      const matchesCategory = category === ALL || item.category === category;
      const matchesQuery = !needle || `${item.title} ${item.description} ${item.category} ${item.source}`.toLowerCase().includes(needle);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const grouped = categories
    .map((name) => ({ name, items: filtered.filter((item) => item.category === name) }))
    .filter((group) => group.items.length > 0);

  return (
    <section className="resource-directory">
      <div className="resource-filterbar">
        <label className="resource-search">
          <span>Search student resources</span>
          <div>
            <Search aria-hidden="true" />
            <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search admissions, learning materials, tools…" />
          </div>
        </label>
        <div className="resource-chips" aria-label="Filter resources by category">
          {[ALL, ...categories].map((item) => (
            <Button
              type="button"
              size="sm"
              variant={category === item ? "default" : "outline"}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
              key={item}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>

      <p className="resource-count">{filtered.length} useful student resources.</p>

      {grouped.length ? grouped.map((group) => (
        <section className="resource-group" key={group.name}>
          <header>
            <h2>{group.name}</h2>
            <span>{group.items.length}</span>
          </header>
          <div className="resource-list">
            {group.items.map((item) => (
              <article className={item.source === "Official UCF resource" ? "resource-item resource-item--ucf" : "resource-item"} key={item.href}>
                <h3><a href={item.href} target="_blank" rel="noreferrer">{item.title}<ArrowUpRight aria-hidden="true" /></a></h3>
                <p>{item.description}</p>
                <span>{item.source} · {item.domain}</span>
              </article>
            ))}
          </div>
        </section>
      )) : (
        <p className="resource-empty">No resources match that search.</p>
      )}
    </section>
  );
}
