"use client";

import projects, { ProjectRaw, Tag } from "projects-list";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import Card from "./card";
import Checkbox from "./checkbox";
import { ProjectFilterContext } from "../_contexts/project-filters";
import RadioButton from "./radio-button";
import TitledSection from "./titled-section";
import { useSearchParams } from "next/navigation";

const allTags = [
  ...projects
    .map((p) => p.tags)
    .reduce((allTags, projectTags) => {
      for (const tag of projectTags) {
        allTags.add(tag);
      }
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

  useLayoutEffect(() => {
    setTags({
      value: new Set<Tag>(
        (urlParams.getAll("tags") as Tag[]).filter((tag) =>
          allTags.includes(tag),
        ),
      ),
    });
  }, [urlParams]);

  useEffect(() => {
    setFilter((projects: ProjectRaw[]) => {
      let matching = [...projects].sort(
        (p1, p2) =>
          matchingTags(p2, tags.value).size - matchingTags(p1, tags.value).size,
      );
      if (tags.value.size > 0) {
        matching = matching.filter((p) => matchingTags(p, tags.value).size > 0);
      }
      if (logic === "every") {
        matching = matching.filter((p) => {
          for (const tag of tags.value) {
            if (!p.tags?.includes(tag)) {
              return false;
            }
          }
          return true;
        });
      }
      return matching;
    });
  }, [logic, tags, setFilter]);

  return (
    <TitledSection level={2} title="Filtros">
      <div className="flex flex-row flex-wrap items-stretch justify-center gap-4">
        <Card>
          <fieldset
            className="flex max-h-[50vh] max-w-4xl flex-row flex-wrap gap-1 overflow-y-auto"
            onChange={(event) => {
              if (!(event.target instanceof HTMLInputElement)) {
                console.error("event.target is not an HTMLInputElement");
                return;
              }

              if (event.target.checked) {
                tags.value.add(event.target.value as Tag);
              } else {
                tags.value.delete(event.target.value as Tag);
              }

              setTags({ value: tags.value });
            }}
          >
            <legend className="float-left mb-3 w-full text-center">
              Selecione tags
            </legend>
            {allTags.map((tag) => (
              <div key={tag} className="flex grow flex-col items-stretch">
                <Checkbox value={tag} checked={tags.value.has(tag)}></Checkbox>
              </div>
            ))}
          </fieldset>
        </Card>
        <Card>
          <fieldset
            className="flex flex-col items-stretch gap-4"
            onChange={(event) => {
              if (!(event.target instanceof HTMLInputElement)) {
                console.error("event.target is not an HTMLInputElement");
                return;
              }

              setLogic(event.target.value);
            }}
          >
            <legend className="float-left w-full text-center">
              Lógica de filtragem
            </legend>
            <RadioButton
              name="project-filter-mode"
              value="best-match"
              checked={logic === "best-match"}
            >
              Melhor correspondência
            </RadioButton>
            <RadioButton
              name="project-filter-mode"
              value="every"
              checked={logic === "every"}
            >
              Possui todas categorias selecionadas
            </RadioButton>
          </fieldset>
        </Card>
      </div>
    </TitledSection>
  );
}
