import { render, screen } from "@testing-library/react";
import { ProjectFilterContext } from "@/app/_contexts/project-filters";
import ProjectFilterSelector from "./project-filter-selector";
import { act } from "react-dom/test-utils";

jest.mock("next/navigation", () => {
  const params = new URLSearchParams("");
  // Dealing with mocks seems to be inherently type-unsafe
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    ...jest.requireActual("next/navigation"),
    useSearchParams: () => params,
  };
});

jest.mock("projects-list", () => {
  const projects = [
    { name: "Project 1", tags: ["tag 1", "tag 2"] },
    { name: "Project 2", tags: ["tag 2"] },
    { name: "Project 3", tags: ["tag 3"] },
    { name: "Project 4", tags: [] },
  ];

  return {
    __esModule: true,
    projects,
    default: projects,
  };
});

describe("ProjectFilterSelector", () => {
  it("Shows all tags", () => {
    act(() => render(<ProjectFilterSelector />));

    for (const tag of ["tag 1", "tag 2", "tag 3"]) {
      expect(screen.getByDisplayValue(tag)).toBeInTheDocument();
    }
  });

  it("Sets the filter immediately", () => {
    const setFilter = jest.fn();

    act(() =>
      render(
        <ProjectFilterContext.Provider value={{ setFilter, filter: () => [] }}>
          <ProjectFilterSelector />
        </ProjectFilterContext.Provider>,
      ),
    );

    expect(setFilter).toHaveBeenCalled();
  });

  it("Changes the filter when tags are clicked", () => {
    const setFilter = jest.fn();

    act(() =>
      render(
        <ProjectFilterContext.Provider value={{ setFilter, filter: () => [] }}>
          <ProjectFilterSelector />
        </ProjectFilterContext.Provider>,
      ),
    );

    for (const tag of ["tag 1", "tag 2", "tag 3"]) {
      setFilter.mockClear();
      act(() => {
        screen.getByDisplayValue(tag).click();
      });
      expect(setFilter).toHaveBeenCalledTimes(1);
      setFilter.mockClear();
      act(() => {
        screen.getByDisplayValue(tag).click();
      });
      expect(setFilter).toHaveBeenCalledTimes(1);
    }
  });

  it("Changes the filter when filtering logic changes", () => {
    const setFilter = jest.fn();

    act(() =>
      render(
        <ProjectFilterContext.Provider value={{ setFilter, filter: () => [] }}>
          <ProjectFilterSelector />
        </ProjectFilterContext.Provider>,
      ),
    );

    // Make sure every is selected at the start
    const every = screen.getByDisplayValue("every");
    act(() => {
      every.click();
    });
    setFilter.mockClear();

    act(() => {
      screen.getByDisplayValue("best-match").click();
    });
    expect(setFilter).toHaveBeenCalledTimes(1);
    setFilter.mockClear();
    act(() => {
      screen.getByDisplayValue("every").click();
    });
    expect(setFilter).toHaveBeenCalledTimes(1);
  });
});
