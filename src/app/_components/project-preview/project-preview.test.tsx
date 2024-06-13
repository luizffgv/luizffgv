import { act, render, screen } from "@testing-library/react";
import ProjectPreview from "./project-preview";

const mockProject = {
  name: "Test Project",
  description: "This is a test project",
  url: "https://example.com",
  repository: "https://github.com/example/test-project",
};

describe("ProjectPreview", () => {
  it("Renders project name and description", () => {
    act(() => {
      render(<ProjectPreview project={mockProject} />);
    });

    expect(screen.getByText("Test Project")).toBeInTheDocument();
    expect(screen.getByText("This is a test project")).toBeInTheDocument();
  });

  it("Renders visit button if project has a URL", () => {
    act(() => {
      render(<ProjectPreview project={mockProject} />);
    });

    const visitButton = screen.getByText("Visitar");
    expect(visitButton).toHaveAttribute("href", mockProject.url);
  });

  it("Renders repository button if project has a repository URL", () => {
    act(() => {
      render(<ProjectPreview project={mockProject} />);
    });

    const repositoryButton = screen.getByText("Repositório");
    expect(repositoryButton).toHaveAttribute("href", mockProject.repository);
  });

  it("Does not render visit button if project does not have a URL", () => {
    const projectWithoutUrl = { ...mockProject, url: undefined };
    act(() => {
      render(<ProjectPreview project={projectWithoutUrl} />);
    });

    const visitButton = screen.queryByText("Visitar");
    expect(visitButton).not.toBeInTheDocument();
  });

  it("Does not render repository button if project does not have a repository URL", () => {
    const projectWithoutRepository = { ...mockProject, repository: undefined };
    act(() => {
      render(<ProjectPreview project={projectWithoutRepository} />);
    });

    const repositoryButton = screen.queryByText("Repositório");
    expect(repositoryButton).not.toBeInTheDocument();
  });
});
