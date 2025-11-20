"use client";

import { motion } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import {
  JSX,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import Button from "@/app/_components/button";
import { ProjectFilterContext } from "@/app/projetos/_contexts/project-filters";

import Card from "@components/card";
import Checkbox from "@components/checkbox";

import projects, { ProjectRaw, Tag, tagCategories } from "@projects/_projects";

/** A set of tags to not display, because they are not as relevant. */
const hiddenTags: Set<Tag> = new Set([
  "Bash",
  "C++17",
  "C++20",
  "C18",
  "Doxygen",
  "GitHub",
  "HTML",
  "Livro",
  "Markdown",
  "mdBook",
  "Organização",
]);

const allTags = [
  ...projects
    .map((p) => p.tags)
    .reduce((allTags, projectTags) => {
      for (const tag of projectTags) {
        allTags.add(tag);
      }
      return allTags;
    }, new Set<Tag>()),
]
  .filter((tag) => !hiddenTags.has(tag))
  .toSorted();

const categorizedTags = new Set(Object.values(tagCategories).flat());

const uncategorizedTags = new Set(
  allTags.filter((tag) => !categorizedTags.has(tag)),
);

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

export default function ProjectFilterSelector(): JSX.Element {
  const urlParams = useSearchParams();
  const { setFilter } = useContext(ProjectFilterContext);
  const [tags, setTags] = useState<{ value: Set<Tag> }>({
    value: new Set<Tag>(
      (urlParams.getAll("tags") as Tag[]).filter((tag) =>
        allTags.includes(tag),
      ),
    ),
  });
  const [isExpanded, setIsExpanded] = useState(true);

  const virtualCategories = useMemo(
    () => [
      ...Object.entries(tagCategories),
      ["uncategorized", [...uncategorizedTags]] as const,
    ],
    [],
  );

  useEffect(() => {
    setFilter((projects: ProjectRaw[]) => {
      let matching = projects.toSorted(
        (p1, p2) =>
          matchingTags(p2, tags.value).size - matchingTags(p1, tags.value).size,
      );
      if (tags.value.size > 0) {
        matching = matching.filter((p) => matchingTags(p, tags.value).size > 0);
      }
      return matching;
    });
  }, [tags, setFilter]);

  const renderTag = useCallback(
    (tag: Tag) => (
      <div key={tag} className="flex grow flex-col items-stretch">
        <Checkbox value={tag} checked={tags.value.has(tag)}></Checkbox>
      </div>
    ),
    [tags],
  );

  const getCategoryName = useCallback(
    (category: string) =>
      ({
        category: "Categorias",
        language: "Linguagens",
        library: "Bibliotecas",
        uncategorized: "Sem categoria",
      })[category],
    [],
  );

  const handleClickExpand = useCallback(() => {
    setIsExpanded((previous) => !previous);
  }, []);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
      <Card layout padding={isExpanded ? undefined : 0}>
        <div className="flex flex-col items-center gap-8">
          {isExpanded && (
            <motion.fieldset
              className="flex w-[80vw] flex-col gap-4 sm:w-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              layout
              transition={{
                delay: 0.25,
              }}
              onChange={(event) => {
                if (!(event.target instanceof HTMLInputElement)) {
                  console.error("event.target is not an HTMLInputElement");
                  return;
                }

                window.scrollTo({
                  top: 0,
                  behavior: "instant",
                });

                if (event.target.checked) {
                  tags.value.add(event.target.value as Tag);
                } else {
                  tags.value.delete(event.target.value as Tag);
                }

                setTags({ value: tags.value });
              }}
            >
              {virtualCategories.map(([category, tags]) => (
                <div className="flex flex-col gap-1" key={category}>
                  <div className="text-lg font-bold">
                    {getCategoryName(category)}
                  </div>
                  <div className="flex flex-row flex-wrap gap-2" key={category}>
                    {tags.map((tag) => renderTag(tag))}
                  </div>
                </div>
              ))}
            </motion.fieldset>
          )}
          <motion.div layout>
            <Button onClick={handleClickExpand}>
              <motion.span
                animate={{
                  rotate: `${isExpanded ? 0 : 180}deg`,
                }}
                layout
              >
                <ChevronDownIcon />{" "}
              </motion.span>
              {isExpanded ? <>Ocultar filtros</> : <>Expandir filtros</>}
            </Button>
          </motion.div>
        </div>
      </Card>
    </div>
  );
}
