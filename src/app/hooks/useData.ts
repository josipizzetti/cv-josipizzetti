import { useState, useEffect } from 'react';
import { EXPERIENCE, SKILLS, EDUCATION, PROJECTS, LEADERSHIP_EXPERIENCE } from '../constants';
import type { ExperienceType } from '../constants/experience.ts';
import type { SkillsType } from '../constants/skills.ts';
import type { EducationType } from '../constants/education.ts';
import type { ProjectType } from '../constants/projects.ts';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

type DataType = 'experience' | 'skills' | 'education' | 'projects' | 'leadership';

type DataMap = {
  experience: ExperienceType[];
  skills: SkillsType[];
  education: EducationType[];
  projects: ProjectType[];
  leadership: ExperienceType[];
};

const dataMap: DataMap = {
  experience: EXPERIENCE,
  skills: SKILLS,
  education: EDUCATION,
  projects: PROJECTS,
  leadership: LEADERSHIP_EXPERIENCE,
};

interface UseDataResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useData<T = any>(type: DataType): UseDataResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      // Simulate network delay
      await delay(2300);
      const result = dataMap[type];
      setData(result as T);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [type]);

  return { data, loading, error, refetch: fetchData };
}

// GraphQL-style query function (for practice)
export function useGraphQLQuery<T = any>(query: string): UseDataResult<T> {
  // This is a stub — later I can replace with actual GraphQL calls
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGraphQL = async () => {
      try {
        setLoading(true);
        // Simulate GraphQL query
        await delay(300);
        // Parse query to determine what to return (simplified)
        const type = query.includes('experience') ? 'experience' :
                     query.includes('skills') ? 'skills' :
                     query.includes('leadership') ? 'leadership' :
                     query.includes('education') ? 'education' : 'projects';
        const result = dataMap[type as DataType];
        setData(result as T);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'GraphQL query failed');
      } finally {
        setLoading(false);
      }
    };

    fetchGraphQL();
  }, [query]);

  return { data, loading, error, refetch: () => {} };
}