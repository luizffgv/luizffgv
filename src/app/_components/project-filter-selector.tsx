"use client";

import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { ProjectFilterContext } from "../_contexts/project-filters";
import projects, { ProjectRaw, Tag } from "projects-list";
import styles from "./project-filter-selector.module.scss";
import { useSearchParams } from "next/navigation";

const allTags = [
  ...projects
    .map((p) => p.tags)
    .reduce((allTags, projectTags) => {
      for (const tag of projectTags) allTags.add(tag);
      return allTags;
    }, new Set<Tag>()),
].sort();

/**
 * Returns a set of matches between the project's tags and the provided tags.
 *
 * @param project - Project to check.
 * @param tags - Tags to check the project against.
 * @returns - Set of matched tags.
 */
function matchingTags(project: ProjectRaw, tags: Set<Tag>): Set<Tag> {
  return new Set((project.tags ?? []).filter((tag) => tags.has(tag)));
}

export default function ProjectFilterSelector() {
  const urlParams = useSearchParams();
  const { setFilter } = useContext(ProjectFilterContext);
  const [logic, setLogic] = useState("best-match");
  const [tags, setTags] = useState<{ value: Set<Tag> }>({ value: new Set() });
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useLayoutEffect(() => {
    setTags({
      value: new Set<Tag>(
        (urlParams.getAll("tags") as Tag[]).filter((tag) =>
          allTags.includes(tag)
        )
      ),
    });

    if (detailsRef.current == null) console.error("detailsRef is null.");
    else if (urlParams.get("tags") != null) detailsRef.current.open = true;
  }, [urlParams]);

  useEffect(() => {
    setFilter((projects: ProjectRaw[]) => {
      let matching = [...projects].sort(
        (p1, p2) =>
          matchingTags(p2, tags.value).size - matchingTags(p1, tags.value).size
      );
      if (tags.value.size > 0)
        matching = matching.filter((p) => matchingTags(p, tags.value).size > 0);
      if (logic == "every")
        matching = matching.filter((p) => {
          for (const tag of tags.value) {
            if (!p.tags?.includes(tag)) return false;
          }
          return true;
        });
      return matching;
    });
  }, [logic, tags, setFilter]);

  return (
    <div className={`${styles.container} raiar flex-col align-items-center`}>
      <div className="width-fit">
        <details ref={detailsRef}>
          <summary>Filtros</summary>
          <div className="raiar flex-row flex-wrap gap">
            <fieldset
              className={`${styles.tags} raiar flex-row flex-wrap gap`}
              onChange={(e) => {
                if (!(e.target instanceof HTMLInputElement)) {
                  console.error("event.target is not an HTMLInputElement");
                  return;
                }

                if (e.target.checked) tags.value.add(e.target.value as Tag);
                else tags.value.delete(e.target.value as Tag);

                setTags({ value: tags.value });
              }}
            >
              <legend>Selecione tags</legend>
              {allTags.map((tag) => (
                <label key={tag}>
                  {tag}{" "}
                  <input
                    type="checkbox"
                    value={tag}
                    checked={tags.value.has(tag)}
                    onChange={() => {
                      /* Shut up error, there's already an onChange on the fieldset */
                    }}
                  />
                </label>
              ))}
            </fieldset>
            <fieldset
              onChange={(e) => {
                if (!(e.target instanceof HTMLInputElement)) {
                  console.error("event.target is not an HTMLInputElement");
                  return;
                }

                setLogic(e.target.value);
              }}
            >
              <legend>Lógica de filtragem</legend>
              <label>
                <input
                  type="radio"
                  name="project-filter-mode"
                  value="best-match"
                  defaultChecked
                />
                Melhor correspondência
              </label>
              <label>
                <input type="radio" name="project-filter-mode" value="every" />
                Possui todas categorias selecionadas
              </label>
            </fieldset>
          </div>
        </details>
      </div>
    </div>
  );
}
