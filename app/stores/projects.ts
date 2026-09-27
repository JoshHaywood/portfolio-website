import { defineStore } from 'pinia';
import type { ProjectId } from '~/types/project';

export const useProjectsStore = defineStore('project', () => {
  const showSidebar = ref<boolean>(false);
  const activeProject = ref<ProjectId | null>(null);

  const setSidebar = (projectId: ProjectId) => {
    showSidebar.value = true;
    activeProject.value = projectId;
  };

  return { showSidebar, activeProject, setSidebar };
});
