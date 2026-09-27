import type { ProjectId } from '~/types/project';

export const useProjectSidebar = () => {
  const isOpen = useState<boolean>('project-sidebar-open', () => false);
  const activeProjectId = useState<ProjectId | null>('active-project-id', () => null);

  const openProject = (projectId: ProjectId) => {
    activeProjectId.value = projectId;
    isOpen.value = true;
  };

  const closeProject = () => {
    isOpen.value = false;
  };

  return {
    isOpen,
    activeProjectId,
    openProject,
    closeProject,
  };
};
